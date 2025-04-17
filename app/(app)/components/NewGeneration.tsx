import { Icon } from "./Icon"
import { Spinner } from "./Spinner"

export default function NewGeneration() {
  return (
    <div className="flex items-center border border-border rounded-md min-h-[300px] w-full h-full flex-col">
      <div className="flex items-center gap-2 p-1.5 w-full border-b border-border bg-muted/30">
        <button className="text-sm flex items-center gap-2 hover:action-button-hover rounded-md px-2 py-1 font-medium cursor-pointer transition-colors">
          <Icon name="project" size="sm" />
          Preview
        </button>
        <button className="text-sm flex items-center gap-2 hover:action-button-hover rounded-md px-2 py-1 font-medium cursor-pointer transition-colors">
          <Icon name="code" size="sm" />
          Code
        </button>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-4 p-8">
        <Spinner className="w-8 h-8 text-primary/60" />
        <p className="text-sm text-muted-foreground">
          Generation in process. It will take a few seconds.
        </p>
      </div>
    </div>
  )
}
