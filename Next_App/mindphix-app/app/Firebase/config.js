import { initializeApp, getApps, getApp} from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCvd1Lm0ePAj-fgc4npTy6SuUBN3jFp-IE",
  authDomain: "mindphix-4737c.firebaseapp.com",
  projectId: "mindphix-4737c",
  storageBucket: "mindphix-4737c.appspot.com",
  messagingSenderId: "732626597375",
  appId: "1:732626597375:web:f7687676cac9ffca19e3ca",
  measurementId: "G-LRZXWH8D75"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)

export {app, auth}