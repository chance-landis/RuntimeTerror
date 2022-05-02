import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyC64jKCQEN6kNN3Xx_I7XebAp20pebyoTs",
    authDomain: "block-health-18735.firebaseapp.com",
    projectId: "block-health-18735",
    storageBucket: "block-health-18735.appspot.com",
    messagingSenderId: "455480969643",
    appId: "1:455480969643:web:8ad00685c62078aafeeaee",
    measurementId: "G-VVHJWY8GP8"
  })
  
export const auth = app.auth()
export default app