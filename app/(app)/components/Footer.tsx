"use client"

import { footerItems, footerItemProps } from "../constants/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const FooterItem = ({ item }: { item: footerItemProps }) => {
  const [open, setOpen] = useState(false)

  if (item.hasDropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className={`flex items-center justify-center gap-1 text-xs font-thin p-2 px-4 text-white hover:text-white/80 hover:rounded-xl hover:bg-neutral-400/10 transition-all duration-600 ${
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
          className={`absolute bottom-full left-0 mb-2 w-48 rounded-lg shadow-lg transition-all duration-300 ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-2"
          }`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="relative w-full h-full">
            <div className="absolute -bottom-[10px] left-5 h-0 w-0">
              <div className="absolute bottom-[1px] left-[1px] h-0 w-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#27272A]" />
            </div>

            <div className="bg-[#121212] rounded-lg border py-2 border-white/10">
              {item.dropdownItems?.map((dropdownItem) => (
                <a
                  key={dropdownItem.label}
                  href={dropdownItem.href}
                  className="block px-4 py-2 text-xs font-thin text-white/70 transition-colors"
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
    <button className="flex items-center justify-center text-xs font-thin p-2 px-2 text-white hover:rounded-xl hover:bg-neutral-400/10 transition-all duration-600">
      <a href={item.href}>{item.label}</a>
    </button>
  )
}
export default function Footer() {
  return (
    <footer className="bg-background text-foreground w-full fixed bottom-0">
      <div className="mx-auto flex py-2 w-full max-w-full items-center">
        <div className="flex-1 flex items-center justify-center md:justify-end gap-2 md:pr-4">
          {footerItems.map((item) => (
            <FooterItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </footer>
  )
}
