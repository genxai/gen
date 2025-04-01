import Navbar from "./components/Navbar"

export default function Page() {
  const isLoggedIn = false

  return (
    <div>
      <div className="bg-background text-foreground w-screen h-screen">
        <Navbar />
      </div>
    </div>
  )
  // return <>{isLoggedIn ? <div>Logged in</div> : <div>Not logged in</div>}</>
}
