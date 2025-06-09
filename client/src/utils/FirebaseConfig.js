import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrD3C9Guw2wUZbNzHXassMr8MCjgy7Z0A",
  authDomain: "whatsapp-90cd0.firebaseapp.com",
  projectId: "whatsapp-90cd0",
  storageBucket: "whatsapp-90cd0.firebasestorage.app",
  messagingSenderId: "974239341677",
  appId: "1:974239341677:web:1dc86a9af3b9db54faf364",
  measurementId: "G-1K80VL79RM"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);