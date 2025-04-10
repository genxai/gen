import { useAccount } from "jazz-react"
import { useState } from "react"

export default function PromptComponent() {
  const { me } = useAccount({
    root: {},
  })
  console.log(me, "me")
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
        className="flex flex-col items-center justify-center gap-4 h-[calc(70vh-100px)]"
      >
        <p className="text-4xl font-extrabold">What do you want to generate?</p>
        <p className="text-sm font-semibold text-white/50">
          Prompt, run, edit, and generate with AI
        </p>
        <textarea
          id="textarea"
          rows={1}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              console.log("check tokens")
              console.log(me?.root.tokens, "tokens")
              console.log(typeof me?.root.tokens, "type of tokens")
              console.log(me?.root.tokens, "this")
              console.log(
                typeof me?.root.tokens === "number" && me.root.tokens < 1,
                "value"
              )
              console.log(me?.root.tokens, "tokens")
              if (typeof me?.root.tokens === "number" && me.root.tokens < 1) {
                console.log("here?")
                alert("You don't have enough tokens")
                return
              }
              e.preventDefault()
              handleSubmit(e)
            }
          }}
          className="w-full max-w-md p-3 px-4 border rounded-lg border-neutral-700 bg-neutral-900/70 placeholder:text-sm focus:outline-none resize-none text-left text-white align-top placeholder:text-left placeholder:text-neutral-500 placeholder:font-semibold"
          placeholder="How can i help you today?"
        ></textarea>
      </form>
      <button
        onClick={async () => {
          if (typeof me?.root.tokens === "number") {
            console.log("mutates")
            me.root.tokens = me.root.tokens + 1
          }
          console.log(me?.root.tokens, "tokens")
        }}
      >
        Give tokens
      </button>
    </>
  )
}
