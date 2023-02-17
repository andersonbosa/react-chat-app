import React, { useState } from "react"
import GoogleSignin from "../assets/img/btn_google_signin_dark_pressed_web.png"
import { auth } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

const NavBar = () => {
  const [user] = useAuthState(auth)

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }

  const signOut = () => {
    auth.signOut()
  }

  const SignOutBtn = () => (
    <button onClick={signOut} className="sign-out" type="button">
      Sign Out
    </button>
  )

  const SignInBtn = () => (
    <button className="sign-in">
      <img
        onClick={googleSignIn}
        src={GoogleSignin}
        alt="sign in with google"
        type="button"
      />
    </button>
  )

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? <SignOutBtn /> : <SignInBtn />}
    </nav>
  )
}

export default NavBar
