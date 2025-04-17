"use client"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import PromptComponent from "./components/PromptComponent"

export default function Page() {
  return (
    <div className="bg-background text-foreground w-full h-screen">
      <Navbar />
      <PromptComponent />
      <Footer />
    </div>
  )
}
