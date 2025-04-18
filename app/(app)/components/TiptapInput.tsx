"use client"

import { clsx } from "clsx"
import { forwardRef, useId, useEffect, useRef, useState } from "react"
import { Icon } from "./Icon"

interface TiptapInputProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  label?: string
  className?: string
  id?: string
  grid?: boolean
  onSubmit?: (value: string) => void
  checkTokens?: boolean
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

export const TiptapInput = forwardRef<HTMLTextAreaElement, TiptapInputProps>(
  (
    {
      label,
      className,
      grid = true,
      id: customId,
      onSubmit,
      checkTokens = false,
      placeholder = "How can i help you today?",
      value,
      onChange,
      ...textareaProps
    },
    ref
  ) => {
    const generatedId = useId()
    const id = customId || generatedId
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [showIcons, setShowIcons] = useState(false)

    const adjustHeight = () => {
      const textarea = textareaRef.current
      if (textarea) {
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    }

    useEffect(() => {
      adjustHeight()
    }, [value])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        if (onSubmit) {
          onSubmit(value)
        }
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value)
    }

    const containerClassName = grid ? clsx("grid gap-1", className) : className

    const actions = [
      { icon: "image", label: "Image" },
      { icon: "code", label: "Code" },
      { icon: "file", label: "File" },
      { icon: "write", label: "Write" },
    ]

    return (
      <div className={containerClassName}>
        {label && (
          <label htmlFor={id} className="mb-1 text-muted-foreground">
            {label}
          </label>
        )}

        <div className="relative flex flex-col gap-2">
          <textarea
            ref={(element) => {
              if (typeof ref === "function") {
                ref(element)
              } else if (ref) {
                ref.current = element
              }
              textareaRef.current = element
            }}
            {...textareaProps}
            id={id}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={1}
          />

          <div className="flex mb-3 mr-1 justify-end">
            <div
              className="relative"
              onMouseEnter={() => setShowIcons(true)}
              onMouseLeave={() => setShowIcons(false)}
            >
              <button
                type="button"
                className="flex items-center justify-center size-5 rounded-md bg-input hover:cursor-pointer transition-colors"
              >
                <Icon name="add" size="xs" />
              </button>

              {showIcons && (
                <div className="absolute bottom-0 right-full flex items-center gap-2 pr-2">
                  {actions.map((action) => (
                    <button
                      key={action.label}
                      type="button"
                      className="flex items-center justify-center size-5 rounded-md bg-input hover:cursor-pointer hover:bg-foreground/20 transition-colors"
                    >
                      <Icon name={action.icon} size="xs" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
)

TiptapInput.displayName = "TiptapInput"
