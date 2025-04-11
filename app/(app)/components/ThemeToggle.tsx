"use client"

import { useTheme } from "next-themes"
import { Button } from "./Button"
import { Icon } from "./Icon"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      icon={theme === "dark" ? "lightTheme" : "darkTheme"}
    ></Button>
  )
}
