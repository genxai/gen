import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendLoginEmail(email: string, token: string) {
  const link = `https://gen.new/api/auth/verify?token=${token}`
  await resend.emails.send({
    from: "noreply@gen.new",
    to: email,
    subject: "Login to gen.new",
    html: `<p>Click <a href="${link}">here</a> to log in. This link expires in 15 minutes.</p>`,
  })
}
