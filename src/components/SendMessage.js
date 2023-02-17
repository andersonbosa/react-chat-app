import React, { useState } from "react"
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"


const SendMessage = () => {
  const [message, setMessage] = useState('')

  const sendUserMessage = async (event) => {
    event.preventDefault()
    const msgIsInvalid = message.trim() === ''
    if (msgIsInvalid) {
      window.alert('Enter a valid message')
      return
    }

    const { uid, displayName, photoURL } = auth.currentUser
    await addDoc(
      collection(db, 'messages'),
      {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      }
    )

    setMessage('')
  }

  return (
    <form className="send-message" onSubmit={event => sendUserMessage(event)}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={evt => setMessage(evt.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default SendMessage
