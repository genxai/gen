"use client"
import { useForm } from "@tanstack/react-form"
import { useState, useEffect } from "react"

export default function Auth() {
  const [status, setStatus] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const errorParam = params.get("error")
    if (errorParam === "missing_token") setError("Missing token")
    else if (errorParam === "invalid_token") setError("Invalid token")
    else if (errorParam === "expired_token")
      setError("Token expired. Please try again.")
  }, [])
  const form = useForm({
    defaultValues: { email: "" },
    onSubmit: async ({ value }) => {
      try {
        setIsSubmitting(true)
        // TODO: here briefly as site is prod, not to abuse resend sending
        if (value.email !== "nikita@nikiv.dev") {
          setError("Unauthorized email address")
          setStatus(null)
          setIsSubmitting(false)
          return
        }
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        })
        const data = await res.json()
        if (res.ok) {
          if (data.loginUrl) {
            setStatus(`Development login URL: ${data.loginUrl}`)
          } else {
            setStatus("Check your email for the login link")
          }
          setError(null)
        } else {
          setError(data.error || "An error occurred")
          setStatus(null)
        }
      } catch (err) {
        setError("An error occurred")
        setStatus(null)
      } finally {
        setIsSubmitting(false)
      }
    },
  })

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0" />
      <div className="relative w-[80%] mx-auto max-w-md rounded-xl backdrop-blur-md p-8 shadow-lg border border-white/20">
        {status && (
          <p className="mb-6 text-center text-sm font-semibold text-white">
            {status}
          </p>
        )}
        {error && (
          <p className="mb-6 text-center text-sm font-semibold text-red-500">
            {error}
          </p>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
          className="space-y-6"
        >
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Email is required"
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Invalid email"
                }
              },
            }}
          >
            {(field) => (
              <div className="space-y-2">
                <input
                  id={field.name}
                  type="email"
                  className="w-full rounded-lg border bg-inherit border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="email"
                />
                {field.state.meta.errors && (
                  <span className="text-sm text-red-500">
                    {field.state.meta.errors.join(", ")}
                  </span>
                )}
              </div>
            )}
          </form.Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg p-3 font-medium transition-colors bg-neutral-500/10 hover:bg-neutral-500/20 focus:outline-none disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Login Link"}
          </button>
        </form>
      </div>
    </div>
  )
}
