import { clsx } from "clsx"
import { forwardRef, useId } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // label can be hidden with a "label:sr-only" className
  label: string
  className?: string
  id?: string
  grid?: boolean
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, grid = true, id: customId, ...inputProps }, ref) => {
    const generatedId = useId()
    const id = customId || generatedId

    const inputClassName = clsx(
      "w-full rounded-md border border-border active:border-border focus:border-border active:ring-0 focus:ring-0 focus:outline-none px-3.5 py-2 shadow-sm",
      "font-medium text-muted-foreground",
      "bg-muted-foreground/70"
    )

    const containerClassName = grid ? clsx("grid gap-1", className) : className

    return (
      <div className={containerClassName}>
        <label htmlFor={id} className="mb-1 text-muted-foreground">
          {label}
        </label>

        <input ref={ref} {...inputProps} id={id} className={inputClassName} />
      </div>
    )
  }
)
