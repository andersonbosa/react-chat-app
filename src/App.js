import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import './assets/css/App.css'
import "./assets/css/App.css"
import ChatBox from "./components/ChatBox"
import NavBar from "./components/NavBar"
import Welcome from "./components/Welcome"

function App () {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  )
}

export default App
