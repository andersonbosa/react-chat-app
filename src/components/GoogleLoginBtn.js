import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleSignin from "../assets/img/btn_google_signin.png"
import { auth } from "../firebase"

const GoogleLoginBtn = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }

  return (
    <button className="sign-in">
      <img
        onClick={googleSignIn}
        src={GoogleSignin}
        alt="sign in with google"
        type="button"
      />
    </button>)
}

export default GoogleLoginBtn