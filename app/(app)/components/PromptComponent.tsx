export default function PromptComponent() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[calc(70vh-100px)]">
      <p className="text-4xl font-extrabold">What do you want to generate?</p>
      <p className="text-sm font-semibold text-white/50">
        Prompt, run, edit, and generate with AI
      </p>
      <textarea
        id="textarea"
        rows={1}
        className="w-full max-w-md p-3 px-4 border rounded-lg border-neutral-700 bg-neutral-900/70 placeholder:text-sm focus:outline-none resize-none text-left text-white align-top placeholder:text-left placeholder:text-neutral-500 placeholder:font-semibold"
        placeholder="How can i help you today?"
      ></textarea>
    </div>
  )
}
