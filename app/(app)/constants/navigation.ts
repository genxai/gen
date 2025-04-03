export interface navItemProps {
  label: string
  href?: string
  hasDropdown?: boolean
  dropdownItems?: { label: string; href: string }[]
}

export const navItems: navItemProps[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Tools",
    hasDropdown: true,
    dropdownItems: [
      { label: "Text to Image", href: "/" },
      { label: "Generate Code", href: "/" },
      { label: "Generate Video", href: "/" },
    ],
  },
  {
    label: "Community",
    hasDropdown: true,
    dropdownItems: [
      { label: "Discord", href: "/discord" },
      { label: "Twitter", href: "/x" },
      { label: "Telegram", href: "/telegram" },
      { label: "Reddit", href: "/reddit" },
      { label: "GitHub", href: "/github" },
    ],
  },
]
