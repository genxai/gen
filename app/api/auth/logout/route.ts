import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const response = NextResponse.json({ message: "Logged out" })
  response.cookies.set("sessionToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0, // Expires immediately
    path: "/",
  })
  return response
}
