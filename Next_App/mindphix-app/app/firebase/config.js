import { initializeApp, getApps, getApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";

/*const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://mindphix-4737c-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};*/


const firebaseConfig = {
  apiKey: "AIzaSyCvd1Lm0ePAj-fgc4npTy6SuUBN3jFp-IE",
  authDomain: "mindphix-4737c.firebaseapp.com",
  databaseURL: "https://mindphix-4737c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mindphix-4737c",
  storageBucket: "mindphix-4737c.appspot.com",
  messagingSenderId: "732626597375",
  appId: "1:732626597375:web:f7687676cac9ffca19e3ca",
  measurementId: "G-LRZXWH8D75"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const database = getDatabase(app);

export {app, auth, database}