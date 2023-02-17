import { useState } from "react"
import "./assets/css/App.css"
import ChatBox from "./components/ChatBox"
import NavBar from "./components/NavBar"
import Welcome from "./components/Welcome"

function App () {
  const [user, setUser] = useState(false)

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  )
}

export default App
