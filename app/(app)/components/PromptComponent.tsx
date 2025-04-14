"use client"

import { useAccount } from "jazz-react"
import { useState } from "react"
import { TiptapInput } from "./TiptapInput"
import { Icon } from "./Icon"

export default function PromptComponent() {
  const { me } = useAccount({
    root: {},
  })
  const [prompt, setPrompt] = useState("")

  const actions = [
    { icon: "image", label: "Image to Image" },
    { icon: "image", label: "Text to Image" },
    { icon: "code", label: "Generate Code" },
    { icon: "image", label: "Generate Video" },
  ]

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
        className="flex flex-col mt-15 items-center justify-center h-[80vh] sm:h-[60vh] max-w-5xl mx-auto px-4"
      >
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <p className="text-2xl lg:text-3xl font-medium">
            What do you want to generate?
          </p>
          <p className="text-sm font-semibold opacity-80">
            Prompt, run, edit, and generate with AI
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-4">
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              className="flex items-center border border-border gap-2 px-4 py-2 rounded-3xl bg-inherit action-button hover:action-button-hover hover:cursor-pointer transition-colors"
            >
              <Icon name={action.icon} size="xs" />
              <span className="text-xs font-medium">{action.label}</span>
            </button>
          ))}
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
      {/* <button
        onClick={async () => {
          if (typeof me?.root.tokens === "number") {
            me.root.tokens = me.root.tokens + 1
          }
        }}
      >
        Give tokens
      </button> */}
    </>
  )
}
