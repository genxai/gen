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
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      <div className="relative w-[80%] mx-auto max-w-md rounded-xl bg-red-500 backdrop-blur-md p-8 shadow-lg border border-white/20">
        <h2 className="mb-6 text-center text-2xl font-semibold text-white">
          Welcome to Gen New
        </h2>

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
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
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

          <button
            type="submit"
            className="w-full rounded-lg bg-white p-3 font-medium text-red-500 transition-colors hover:bg-neutral-white focus:outline-none"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
