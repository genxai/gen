import { isProd } from "@/lib/utils"
import crypto from "crypto"
import { NextRequest, NextResponse } from "next/server"
import { add, get, set } from "ronin"

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }
  let user = await get.user.with({ email })
  if (!user) {
    user = await add.user.with({ email })
  }
  const token = crypto.randomBytes(32).toString("hex")
  await set.user({
    with: { id: user!.id },
    to: {
      token,
      tokenCreatedAt: new Date(),
    },
  })

  if (isProd) {
    try {
      // await sendLoginEmail(email, token)
      return NextResponse.json({
        message: "Check your email for the login link",
      })
    } catch (error) {
      console.error("Failed to send email:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      )
    }
  } else {
    console.log(`Development login token for ${email}: ${token}`)
    const loginUrl = `http://localhost:3000/api/auth/verify?token=${token}`
    console.log(`Login URL: ${loginUrl}`)
    return NextResponse.json({
      message: `Development login token for ${email}: ${token}`,
      loginUrl,
    })
  }
}
