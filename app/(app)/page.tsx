export default function Page() {
	// TODO: should come from better auth
	const isLoggedIn = false
	return <>{isLoggedIn ? <div>Logged in</div> : <div>Not logged in</div>}</>
}
