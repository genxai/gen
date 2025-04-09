import {
  Discord,
  Twitter,
  Reddit,
  Instagram,
  Telegram,
  GitHub,
} from "@/app/icons/community"

export interface navItemProps {
  label: string
  href?: string
  hasDropdown?: boolean
  dropdownTitle?: string
  dropdownDescription?: string
  dropdownItems?: Array<{
    label: string
    href: string
    icon?: React.ReactNode
  }>
}

export const navItems: navItemProps[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Tools",
    hasDropdown: true,
    dropdownTitle: "Tools and Features",
    dropdownDescription: "Generate images, code, and videos",
    dropdownItems: [
      { label: "Text to Image", href: "/" },
      { label: "Image to Image", href: "/" },
      { label: "Generate Code", href: "/" },
      { label: "Generate Video", href: "/" },
    ],
  },
  {
    label: "Community",
    hasDropdown: true,
    dropdownTitle: "Community",
    dropdownDescription: "Connect with other users and share your creations",
    dropdownItems: [
      { label: "Discord", href: "/discord", icon: <Discord /> },
      { label: "Telegram", href: "/telegram", icon: <Telegram /> },
      { label: "Twitter", href: "/x", icon: <Twitter /> },
      { label: "Reddit", href: "/reddit", icon: <Reddit /> },
      { label: "GitHub", href: "/github", icon: <GitHub /> },
      { label: "Instagram", href: "/instagram", icon: <Instagram /> },
    ],
  },
]
