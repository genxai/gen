import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Manrope } from "next/font/google"
import { JazzAndAuth } from "./(app)/components/JazzAndAuth"

export const metadata: Metadata = {
  title: "gen.new",
  description: "Generate code, images, video",
}
export const viewport: Viewport = {
  maximumScale: 1,
}
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <JazzAndAuth>{children}</JazzAndAuth>
      </body>
    </html>
  )
}
