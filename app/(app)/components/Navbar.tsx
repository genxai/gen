"use client"

import { ChevronDown } from "lucide-react"
import React, { useState } from "react"
import { navItems, navItemProps } from "../constants/navigation"

const NavigationItem = ({ item }: { item: navItemProps }) => {
  const [open, setOpen] = useState(false)

  if (item.hasDropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className={`flex items-center justify-center gap-1 text-sm font-bold p-2 px-4 text-white hover:text-white/80 hover:rounded-xl hover:bg-neutral-400/10 transition-all duration-600 ${
            open ? "text-white/80 rounded-xl bg-neutral-400/10" : ""
          }`}
        >
          {item.label}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg transition-all duration-300 ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-2"
          }`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="relative w-full h-full">
            <div className="absolute -top-[10px] left-5 h-0 w-0">
              <div className="absolute h-0 w-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[11px] border-b-white/10" />
              <div className="absolute top-[1px] left-[1px] h-0 w-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-[#27272A]" />
            </div>

            <div className="bg-[#121212] rounded-lg border py-2 border-white/10">
              {item.dropdownItems?.map((dropdownItem) => (
                <a
                  key={dropdownItem.label}
                  href={dropdownItem.href}
                  className="block px-4 py-2 text-sm font-bold text-white/70 transition-colors"
                >
                  <span className="text-white/70 hover:text-white transition-all duration-600">
                    {dropdownItem.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <button className="flex items-center justify-center gap-1 text-sm font-bold p-2 px-4 text-white  hover:rounded-xl hover:bg-neutral-400/10 transition-all duration-600">
      <a href={item.href}>{item.label}</a>
    </button>
  )
}

export default function Navbar() {
  return (
    <header className="sticky desktop-only top-0 z-50  px-4 transition-colors duration-500 shadow-none">
      <div className="mx-auto flex py-2 w-full max-w-full items-center justify-between">
        <a href="/" className="flex items-center font-extrabold text-xl gap-2">
          gen new
        </a>
        <div className="flex-1 flex items-center justify-center gap-2">
          {navItems.map((item) => (
            <NavigationItem key={item.label} item={item} />
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <a
            href="/auth"
            className="flex items-center justify-center text-xs font-semibold p-1.5 px-3 text-white hover:text-white/80 rounded-[6px] bg-white/10 hover:bg-white/15 transition-all duration-600"
          >
            Sign In
          </a>
          <a
            href="/auth"
            className="flex items-center justify-center text-xs font-semibold p-1.5 px-3 text-white bg-blue-500 rounded-[6px] hover:bg-blue-600 transition-all duration-600"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
