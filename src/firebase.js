import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAoqdnEvaok4WNywrv1x3iwK3qZY8WotcQ",
  authDomain: "ptedu-site.firebaseapp.com",
  projectId: "ptedu-site",
  storageBucket: "ptedu-site.appspot.com",
  messagingSenderId: "67909188476",
  appId: "1:67909188476:web:33850ed3a9d5006cbcc2f9",
  measurementId: "G-B83S10RL0Z"
};

const app = initializeApp(firebaseConfig);
export default app;