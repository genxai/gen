"use client"

import { useAccount } from "jazz-react"
import { useState } from "react"
import { TiptapInput } from "./TiptapInput"

export default function PromptComponent() {
  const { me } = useAccount({
    root: {},
  })
  const [prompt, setPrompt] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return
    console.log("Submitted prompt:", prompt)
    setPrompt("")
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center h-[80vh] sm:h-[60vh] max-w-5xl mx-auto px-4"
      >
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <p className="text-3xl sm:text-3xl lg:text-4xl font-semibold">
            What do you want to generate?
          </p>
          <p className="text-sm font-semibold text-muted-foreground/50">
            Prompt, run, edit, and generate with AI
          </p>
        </div>

        <div className="hidden sm:flex w-full justify-center">
          <TiptapInput
            id="textarea-desktop"
            rows={1}
            value={prompt}
            onChange={setPrompt}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                if (typeof me?.root.tokens === "number" && me.root.tokens < 1) {
                  alert("You don't have enough tokens")
                  return
                }
                e.preventDefault()
                handleSubmit(e)
              }
            }}
            className="w-[70%] p-3 bg-input px-4 rounded-2xl border-2 border-border bg-muted-foreground/70 placeholder:text-sm focus:outline-none resize-none text-left text-muted-foreground align-top placeholder:text-left placeholder:text-muted-foreground/50 placeholder:font-semibold"
            placeholder="How can i help you today?"
          />
        </div>

        <div className="sm:hidden fixed bottom-0 left-0 right-0 p-4">
          <TiptapInput
            id="textarea-mobile"
            rows={1}
            value={prompt}
            onChange={setPrompt}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                if (typeof me?.root.tokens === "number" && me.root.tokens < 1) {
                  alert("You don't have enough tokens")
                  return
                }
                e.preventDefault()
                handleSubmit(e)
              }
            }}
            className="w-full p-3 px-4 rounded-2xl border-2 border-border bg-input placeholder:text-sm focus:outline-none resize-none text-left text-muted-foreground align-top placeholder:text-left placeholder:text-muted-foreground/50 placeholder:font-semibold"
            placeholder="How can i help you today?"
          />
        </div>
      </form>
      <button
        onClick={async () => {
          if (typeof me?.root.tokens === "number") {
            me.root.tokens = me.root.tokens + 1
          }
        }}
      >
        Give tokens
      </button>
    </>
  )
}
