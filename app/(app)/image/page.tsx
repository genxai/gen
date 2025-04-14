"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Button } from "../components/Button"
import { useState } from "react"
import { Icon } from "../components/Icon"
import { TiptapInput } from "../components/TiptapInput"
import { ActionSelector } from "../components/ActionSelector"

type ActionType =
  | "text-to-image"
  | "image-to-image"
  | "generate-code"
  | "generate-video"

export default function ImagePage() {
  const [prompt, setPrompt] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [selectedAction, setSelectedAction] =
    useState<ActionType>("text-to-image")
  const [loading, setLoading] = useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setLoading(false)
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="w-1/2 space-y-6 flex flex-col">
            <div className="space-y-4 flex-grow">
              <div className="grid gap-1">
                <div className="flex items-center justify-between">
                  <label className="text-muted-foreground text-sm">
                    Prompt
                  </label>
                  <div className="w-48">
                    <ActionSelector
                      selectedAction={selectedAction}
                      onActionSelect={setSelectedAction}
                    />
                  </div>
                </div>
                <TiptapInput
                  value={prompt}
                  onChange={setPrompt}
                  placeholder="Enter your prompt here..."
                  className="w-full p-3 px-4 border-2 border-border rounded-lg"
                  rows={1}
                />
              </div>

              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
              >
                {selectedFile ? (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {selectedFile.name}
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setSelectedFile(null)}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Icon
                      name="upload"
                      size="xl"
                      className="mx-auto text-muted-foreground"
                    />
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your image here, or click to select
                    </p>
                  </div>
                )}
              </div>

              <Button
                variant="primary"
                className="w-full"
                onClick={handleSubmit}
                loading={loading}
              >
                Generate
              </Button>
            </div>
          </div>

          <div className="w-1/2">
            <div className="border border-border rounded-lg p-4 h-[600px] overflow-auto">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto" />
                    <p className="text-sm text-muted-foreground">
                      Generating...
                    </p>
                  </div>
                </div>
              ) : result ? (
                <img
                  src={result}
                  alt="Generated result"
                  className="w-full h-auto"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-[13px] text-muted-foreground">
                  Your result will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
