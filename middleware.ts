import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

const JWT_SECRET = process.env.JWT_SECRET

export async function middleware(req: NextRequest) {
  const sessionToken = req.cookies.get("sessionToken")?.value
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/auth", req.url))
  }

  try {
    await jwtVerify(sessionToken, new TextEncoder().encode(JWT_SECRET))
    return NextResponse.next()
  } catch (err) {
    req.cookies.delete("sessionToken")
    return NextResponse.next()
  }
}

export const config = {
  matcher: ["/((?!auth|api|_next|favicon.ico).*)"],
}
