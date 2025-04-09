"use client"

import { AuthProvider } from "@/app/contexts/Auth"
import { JazzAccount } from "@/lib/schema"
import { JazzProvider } from "jazz-react"
import { type ReactNode, lazy } from "react"

const JazzDevTools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("jazz-inspector").then((res) => ({
          default: res.JazzInspector,
        }))
      )

export function JazzAndAuth({ children }: { children: ReactNode }) {
  return (
    <JazzProvider
      sync={{ peer: "wss://cloud.jazz.tools/?key=jazz@gen.new" }}
      AccountSchema={JazzAccount}
    >
      <>
        <AuthProvider>{children}</AuthProvider>
        <JazzDevTools />
      </>
    </JazzProvider>
  )
}

declare module "jazz-react" {
  interface Register {
    Account: JazzAccount
  }
}
