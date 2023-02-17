import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query
} from 'firebase/firestore'
import React, { useEffect, useState } from "react"
import { db } from '../firebase'
import Message from "./Message"
import SendMessage from "./SendMessage"


const ChatBox = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const _query = query(
      collection(db, "messages"),
      orderBy('createdAt'),
      limit(50)
    )

    const unsubscribe = onSnapshot(
      _query,
      QuerySnapShot => {
        let messages = []
        QuerySnapShot.forEach(doc => {
          messages.push({ ...doc.data(), id: doc.id })
        })
        setMessages(messages)
      }
    )

    return () => unsubscribe
  })

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {
          messages?.map(message => (
            <Message key={message.id} message={message} />
          ))
        }
      </div>
      <SendMessage />
    </main>
  )
}

export default ChatBox
