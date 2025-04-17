import { Icon } from "./Icon"
import { X } from "lucide-react"

export default function NewChat() {
  return (
    <div className="flex items-center flex-col w-full h-full justify-center">
      <p className="text-[13px] font-[600] leading-[2]">
        Category filtering to view tools by type (Al, UI Libraries, Frameworks,
        etc.) * Smooth horizontal scrolling with navigation buttons • Cards that
        open the respective websites when clicked • Visual feedback on hover
        with subtle animations + Mobile-friendly design that adapts to different
        screen sizes Each card displays: Category filtering to view tools by
        type (Al, UI Libraries, Frameworks, etc.) * Smooth horizontal scrolling
        with navigation buttons • Cards that open the respective websites when
        clicked • Visual feedback on hover with subtle animations +
        Mobile-friendly design that adapts to different screen sizes Each card
        displays: Category filtering to view tools by type (Al, UI Libraries,
        Frameworks, etc.) * Smooth horizontal scrolling with navigation buttons
        • Cards that open the respective websites when clicked • Visual feedback
        on hover with subtle animations + Mobile-friendly design that adapts to
        different screen sizes Each card displays: Category filtering to view
        tools by type (Al, UI Libraries, Frameworks, etc.) * Smooth horizontal
        scrolling with navigation buttons • Cards that open the respective
        websites when clicked • Visual feedback on hover with subtle animations
        + Mobile-friendly design that adapts to different screen sizes Each card
        displays: Category filtering to view tools by type (Al, UI Libraries,
        Frameworks, etc.) * Smooth horizontal scrolling with navigation buttons
        • Cards that open the respective websites when clicked • Visual feedback
        on hover with subtle animations + Mobile-friendly design that adapts to
        different screen sizes Each card displays: Category filtering to view
        tools by type (Al, UI Libraries, Frameworks, etc.) * Smooth horizontal
        scrolling with navigation buttons • Cards that open the respective
        websites when clicked • Visual feedback on hover with subtle animations
        + Mobile-friendly design that adapts to different screen sizes Each card
        displays: Category filtering to view tools by type (Al, UI Libraries,
        Frameworks, etc.) * Smooth horizontal scrolling with navigation buttons
        • Cards that open the respective websites when clicked • Visual feedback
        on hover with subtle animations + Mobile-friendly design that adapts to
        different screen sizes Each card displays: Category filtering to view
        tools by type (Al, UI Libraries, Frameworks, etc.) * Smooth horizontal
        scrolling with navigation buttons • Cards that open the respective
        websites when clicked • Visual feedback on hover with subtle animations
        + Mobile-friendly design that adapts to different screen sizes Each card
        displays:
      </p>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row justify-between text-xs opacity-80 items-center my-4 gap-2">
          <p>Suggestions</p>
          <Icon name="add" size="xs" className="cursor-pointer rotate-45" />
        </div>

        <div className="w-full rounded-2xl bg-prompt-box-input p-1 overflow-hidden">
          <div className="flex justify-between items-center p-3">
            <p className="font-medium text-foreground text-sm">
              Need more messages? Get higher
              <br />
              limits with Premium.
            </p>

            <button className="flex items-center text-[#38b2ac] transition-colors text-xs">
              Upgrade Plan
            </button>
          </div>

          <div className="border border-border rounded-xl">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Ask a follow up..."
                className="w-full placeholder:font-medium text-[13px] bg-transparent min-h-[70px] text-start focus:outline-none bg-prompt-input py-2 px-3 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
