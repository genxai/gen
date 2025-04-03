"use client"
import { useForm } from "@tanstack/react-form"

export default function Auth() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    },
  })

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0" />
      <div className="relative w-[80%] mx-auto max-w-md rounded-xl backdrop-blur-md p-8 shadow-lg border border-white/20">
        <p className="mb-6 text-center text-sm font-semibold text-white">
          To use Gen New you must log into an existing account or create one
          using one of the options below
        </p>
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
                {/* <label htmlFor={field.name} className="block font-medium">
                  Email
                </label> */}
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

          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Password is required"
                if (value.length < 6) return "Minimum 6 characters"
              },
            }}
          >
            {(field) => (
              <div className="space-y-2">
                {/* <label htmlFor={field.name} className="block font-medium">
                  Password
                </label> */}
                <input
                  id={field.name}
                  type="password"
                  className="w-full rounded-lg border bg-inherit border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="••••••"
                />
                {field.state.meta.errors && (
                  <span className="text-sm text-red-500">
                    {field.state.meta.errors.join(", ")}
                  </span>
                )}
              </div>
            )}
          </form.Field>
          <p className="text-center text-sm text-white">
            By using Gen New, you agree to the collection of usage data for
            analytics.
          </p>
          <p className="text-center text-sm text-white">
            Don't have an account?{" "}
            <a href="/auth/signup" className="text-blue-500">
              Sign up
            </a>
          </p>
          {/* <button
            type="submit"
            className="w-full rounded-lg p-3 font-medium transition-colors bg-neutral-500/10 hover:bg-neutral-500/20 focus:outline-none"
          >
            Auth
          </button> */}
        </form>
      </div>
    </div>
  )
}
