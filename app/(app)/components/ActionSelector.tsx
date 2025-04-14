"use client"

import { useState, useRef, useEffect } from "react"
import { Icon } from "./Icon"
import { Button } from "./Button"
import { ChevronDown } from "lucide-react"

export type ActionType =
  | "text-to-image"
  | "image-to-image"
  | "generate-code"
  | "generate-video"

interface ActionSelectorProps {
  selectedAction: ActionType
  onActionSelect: (action: ActionType) => void
}

const actions = [
  {
    type: "text-to-image",
    icon: "image",
    label: "Text to Image",
  },
  {
    type: "image-to-image",
    icon: "image",
    label: "Image to Image",
  },
  {
    type: "generate-code",
    icon: "code",
    label: "Generate Code",
  },
  {
    type: "generate-video",
    icon: "file",
    label: "Generate Video",
  },
] as const

export function ActionSelector({
  selectedAction,
  onActionSelect,
}: ActionSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selectedActionData = actions.find(
    (action) => action.type === selectedAction
  )

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="secondary"
        className="w-full flex items-center justify-between border border-border bg-muted-foreground/70"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Icon name={selectedActionData?.icon} size="xs" />
          <span className="text-sm">{selectedActionData?.label}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-foreground backdrop-blur-lg rounded-lg border border-border shadow-lg z-50">
          <div className="py-1">
            {actions.map((action) => (
              <button
                key={action.type}
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-neutral-400/10 transition-colors ${
                  selectedAction === action.type ? "bg-neutral-400/5" : ""
                }`}
                onClick={() => {
                  onActionSelect(action.type)
                  setIsOpen(false)
                }}
              >
                <Icon name={action.icon} size="xs" />
                <span className="text-sm">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
