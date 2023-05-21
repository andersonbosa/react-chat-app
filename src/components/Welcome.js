import React from "react"
import GithubLoginBtn from './GithubLoginBtn'
import GoogleLoginBtn from './GoogleLoginBtn'

const Welcome = () => {
  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in to chat</p>
      <ul>
        <li> <GoogleLoginBtn /> </li>
        <li> <GithubLoginBtn /> </li>
      </ul>
    </main>
  )
}

export default Welcome
