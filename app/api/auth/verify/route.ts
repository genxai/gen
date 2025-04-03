import { NextRequest, NextResponse } from "next/server"
import { get, set } from "ronin"
import { SignJWT } from "jose"

const JWT_SECRET = process.env.JWT_SECRET

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token")
  if (!token) {
    return NextResponse.redirect(new URL("/auth?error=missing_token", req.url))
  }

  const user = await get.user.with({ token })
  if (!user) {
    return NextResponse.redirect(new URL("/auth?error=invalid_token", req.url))
  }

  const tokenAge = Date.now() - new Date(user.tokenCreatedAt).getTime()
  if (tokenAge > 15 * 60 * 1000) {
    await set.user({
      with: { id: user.id },
      to: { token: null },
    })
    return NextResponse.redirect(new URL("/auth?error=expired_token", req.url))
  }

  const jwt = await new SignJWT({ userId: user.id })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("30d")
    .sign(new TextEncoder().encode(JWT_SECRET))

  await set.user({
    with: { id: user.id },
    to: { token: null },
  })

  const response = NextResponse.redirect(new URL("/", req.url))
  response.cookies.set("sessionToken", jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  })

  return response
}
