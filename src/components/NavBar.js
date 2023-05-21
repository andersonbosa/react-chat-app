import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../firebase'

const NavBar = () => {
  const [user] = useAuthState(auth)


  const signOut = () => {
    auth.signOut()
  }

  const SignOutBtn = () => (
    <button onClick={signOut} className="sign-out" type="button">
      Sign Out
    </button>
  )

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? <SignOutBtn /> : <></>}
    </nav>
  )
}

export default NavBar
