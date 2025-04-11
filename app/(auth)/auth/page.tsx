"use client"

import { Alert } from "@/app/(app)/components/Alert"
import { Loading } from "@/app/(app)/components/Loading"
import { useAuth } from "@/app/contexts/Auth"
import { Input } from "@/app/(app)/components/Input"
import { Button } from "@/app/(app)/components/Button"
import { TextLink } from "@/app/(app)/components/TextLink"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useState } from "react"

const title = "Sign up to gen.new"

export default function Page() {
  const cloudAuth = useAuth()
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>(undefined)
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="sr-only">{title}</h1>
      <div className="max-w-md flex flex-col gap-8 w-full px-6 py-12 mx-auto">
        <Link href="/">
          <span className="sr-only">Back to home</span>
        </Link>

        {error && <Alert variant="danger">{error.message}</Alert>}

        {loading && <Loading />}

        <form
          className="flex flex-col gap-6"
          onSubmit={async (e) => {
            e.preventDefault()
            setLoading(true)
            if (password !== confirmPassword) {
              setError(new Error("Passwords do not match"))
              setLoading(false)
              return
            }
            await cloudAuth.authClient.signUp.email(
              {
                email,
                password,
                name,
              },
              {
                onSuccess: async () => {
                  await cloudAuth.signIn()
                  redirect("/")
                },
                onError: (error) => {
                  setError(error.error)
                },
              }
            )
            setLoading(false)
          }}
        >
          <Input
            label="Email address"
            disabled={loading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            disabled={loading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Confirm password"
            type="password"
            disabled={loading}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            Sign up
          </Button>
        </form>

        <div className="flex items-center gap-4">
          <hr className="flex-1" />
          <p className="text-center">or</p>
          <hr className="flex-1" />
        </div>

        <p className="text-sm text-muted-foreground mx-auto">
          Already have an account? <TextLink href="/sign-in">Sign in</TextLink>
        </p>
      </div>
    </div>
  )
}
