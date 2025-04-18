"use client"

import { ChevronDown } from "lucide-react"
import React, { useState } from "react"
import { navItems, navItemProps } from "../constants/navigation"
import { ThemeToggle } from "./ThemeToggle"

const DropdownMenu = ({
  isOpen,
  content,
  dropdownTitle,
  dropdownDescription,
  onMouseEnter,
  onMouseLeave,
}: {
  isOpen: boolean
  content?: Array<{
    label: string
    href: string
    icon?: React.ReactNode
  }>
  dropdownTitle?: string
  dropdownDescription?: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}) => {
  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 top-[50px] bg-background backdrop-blur-sm transition-all duration-300 w-screen rounded-lg shadow-lg ${
        isOpen ? "opacity-100" : "opacity-0 invisible translate-y-2"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <div className="w-full py-6">
          <div className="max-w-screen-xl w-[60%] mx-auto grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground">
                {dropdownTitle}
              </h3>
              <p className="text-muted-foreground/70 text-xs font-medium">
                {dropdownDescription}
              </p>
            </div>

            <div className="grid grid-cols-2">
              {content?.map((item) => (
                <a key={item.label} href={item.href} className="block">
                  <span className="text-muted-foreground/70 text-sm p-2 px-4 hover:bg-neutral-400/10 rounded-lg font-medium hover:text-muted-foreground transition-all duration-600 flex items-center gap-2">
                    {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const NavigationItem = ({
  item,
  onHover,
}: {
  item: navItemProps
  onHover: (item: navItemProps) => void
}) => {
  if (item.hasDropdown) {
    return (
      <button
        className={`flex items-center justify-center gap-1 text-sm font-bold p-2 px-4 text-muted-foreground hover:text-muted-foreground/80 hover:rounded-xl hover:bg-neutral-400/10 transition-all duration-600`}
        onMouseEnter={() => onHover(item)}
      >
        {item.label}
        <ChevronDown className="w-4 h-4" />
      </button>
    )
  }

  return (
    <button className="flex items-center justify-center gap-1 text-sm font-bold p-2 px-4 text-muted-foreground hover:rounded-xl hover:bg-neutral-400/10 transition-all duration-600">
      <a href={item.href}>{item.label}</a>
    </button>
  )
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleHover = (item: navItemProps) => {
    if (item.hasDropdown) {
      setActiveDropdown(item.label)
    }
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header
      className="sticky desktop-only backdrop-blur-xl top-0 px-4 transition-colors duration-500 shadow-none"
      style={{ zIndex: 50 }}
    >
      <div className="mx-auto flex py-2 w-full max-w-full items-center justify-between">
        <a href="/" className="flex items-center font-extrabold text-xl gap-2">
          gen new
        </a>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavigationItem
              key={item.label}
              item={item}
              onHover={handleHover}
            />
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a
            href="/auth"
            className="flex items-center justify-center text-xs font-semibold p-1.5 px-3 text-muted-foreground hover:text-muted-foreground/80 rounded-[6px] bg-white/10 hover:bg-white/15 transition-all duration-600"
          >
            Sign In
          </a>
          <a
            href="/auth"
            className="flex items-center justify-center text-xs font-semibold p-1.5 px-3 text-muted-foreground bg-blue-500 rounded-[6px] hover:bg-blue-600 transition-all duration-600"
          >
            Get Started
          </a>
        </div>
      </div>

      {activeDropdown && (
        <DropdownMenu
          isOpen={true}
          content={
            navItems.find((item) => item.label === activeDropdown)
              ?.dropdownItems
          }
          dropdownTitle={
            navItems.find((item) => item.label === activeDropdown)
              ?.dropdownTitle
          }
          dropdownDescription={
            navItems.find((item) => item.label === activeDropdown)
              ?.dropdownDescription
          }
          onMouseEnter={() =>
            handleHover(navItems.find((item) => item.label === activeDropdown)!)
          }
          onMouseLeave={handleMouseLeave}
        />
      )}
    </header>
  )
}
