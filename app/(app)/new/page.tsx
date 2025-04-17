import Navbar from "../components/Navbar"
import NewChat from "../components/NewChat"
import NewGeneration from "../components/NewGeneration"

export default function New() {
  return (
    <div className="text-foreground w-full h-screen">
      <Navbar />
      <div className="w-full">
        <div className="flex flex-col lg:flex-row w-full h-full gap-3 p-4">
          <div className="w-full max-h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden scroll-hidden lg:w-1/4">
            <NewChat />
          </div>

          <div className="w-full lg:w-3/4">
            <NewGeneration />
          </div>
        </div>
      </div>
    </div>
  )
}
