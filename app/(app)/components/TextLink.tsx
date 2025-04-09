import clsx from "clsx"
import Link from "next/link"
import type { ReactNode } from "react"

export function TextLink({
  href,
  children,
  target,
  className,
}: {
  href: string
  children: ReactNode
  target?: string
  className?: string
}) {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        className,
        "text-blue underline underline-offset-4",
        "dark:text-blue-400"
      )}
    >
      {children}
    </Link>
  )
}
