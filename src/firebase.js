// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// }

// FIXME DONT COMMIT:
const firebaseConfig = {
  apiKey: "AIzaSyAP2G9qVnbco9MGdwPN8V5LYfL_Zh0ztHo",
  authDomain: "react-chat-app-59860.firebaseapp.com",
  projectId: "react-chat-app-59860",
  storageBucket: "react-chat-app-59860.appspot.com",
  messagingSenderId: "59235724351",
  appId: "1:59235724351:web:e2e0b3fc3e5811f3f2dc8a",
  measurementId: "G-EC15XJFYTC"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export const db = getFirestore(app)
