import Navbar from "./components/Navbar"

export default function Page() {
  return (
    <div>
      {true && (
        <div className="bg-blue-600 text-white text-center py-2 px-4">
          This website is currently being worked on. Nothing works yet. Release
          coming soon!
        </div>
      )}
      <div className="bg-background text-foreground w-screen h-screen">
        <Navbar />
      </div>
    </div>
  )
}
