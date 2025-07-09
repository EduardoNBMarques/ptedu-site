// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXXXXXX-XXXXXXX",             // <- do Firebase Console
  authDomain: "ptedu-site.firebaseapp.com",
  projectId: "ptedu-site",
  storageBucket: "ptedu-site.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);