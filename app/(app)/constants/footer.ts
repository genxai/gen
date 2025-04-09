export interface footerItemProps {
  label: string
  href?: string
  hasDropdown?: boolean
  dropdownItems?: { label: string; href: string }[]
}

export const footerItems: footerItemProps[] = [
  {
    label: "Affiliate",
    href: "/affiliate",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Terms and Privacy",
    href: "/terms",
  },
]
