"use client"

import { useCloudAuth } from "jazz-react-auth-cloudauth"
import { createContext, useContext } from "react"

const AuthContext = createContext<ReturnType<typeof useCloudAuth> | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const value = useCloudAuth("http://localhost:3000/api/auth/")
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
