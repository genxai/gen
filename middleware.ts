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
    // Create a response that redirects to auth
    const response = NextResponse.redirect(new URL("/auth", req.url))

    // Clear the invalid session cookie
    response.cookies.set("sessionToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 0, // This expires the cookie immediately
      path: "/",
    })

    return response
  }
}

export const config = {
  // routes that need authentication
  matcher: [],
}
