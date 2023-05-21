import { GithubAuthProvider, signInWithRedirect } from "firebase/auth"
import React from 'react'
import GithubSignin from "../assets/img/btn_github_signin.png"
import { auth } from "../firebase"


const GithubLoginBtn = () => {
  const githubSignIn = () => {
    const provider = new GithubAuthProvider()
    signInWithRedirect(auth, provider)
  }

  return (
    <button className="sign-in">
      <img
        onClick={githubSignIn}
        src={GithubSignin}
        alt="sign in with github"
        type="button"
      />
    </button>)
}

export default GithubLoginBtn