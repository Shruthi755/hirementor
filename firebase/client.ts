// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBtVgILhXwfmyc7gcM28wdvb5xyxYTC_Hc",
  authDomain: "hirementor-9f308.firebaseapp.com",
  projectId: "hirementor-9f308",
  storageBucket: "hirementor-9f308.firebasestorage.app",
  messagingSenderId: "974487104667",
  appId: "1:974487104667:web:27cbec92b3befce4cc2a3e",
  measurementId: "G-70PWS8SCMC"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth=getAuth(app);
export const db=getFirestore(app);