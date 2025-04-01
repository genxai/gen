export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/10 px-4 pb-px pt-[5px] text-neutral-101 transition-colors duration-500 [--color-landing-bg:#040507] dark:border-neutral-white/10 dark:bg-background dark:text-neutral-white tablet:px-6 desktop:px-10 shadow-none">
      <div className="mx-auto flex h-16 w-full max-w-full items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          GEN
        </a>
      </div>
    </header>
  )
}
