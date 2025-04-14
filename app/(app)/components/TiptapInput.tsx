"use client"

import { clsx } from "clsx"
import { forwardRef, useId, useEffect, useRef } from "react"

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

    return (
      <div className={containerClassName}>
        {label && (
          <label htmlFor={id} className="mb-1 text-muted-foreground">
            {label}
          </label>
        )}

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
      </div>
    )
  }
)

TiptapInput.displayName = "TiptapInput"
