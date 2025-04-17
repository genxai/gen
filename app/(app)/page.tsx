"use client"

import { useAccount } from "jazz-react"
import { useAuth } from "../contexts/Auth"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import PromptComponent from "./components/PromptComponent"

export default function Page() {
  const cloudAuth = useAuth()
  const { me } = useAccount({
    resolve: {
      profile: true,
      root: true,
    },
  })
  return (
    <div className="bg-background text-foreground w-full h-screen">
      {/* {cloudAuth.authClient && (
        <div
          onClick={() => {
            console.log(me, "me")
            // me?.root.tokens = me?.root.tokens + 10
          }}
        >
          give 10 tokens to logged in user
        </div>
      )} */}
      <Navbar />
      <PromptComponent />
      <Footer />
    </div>
  )
}
