// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVnR9mIZcDw8xCps2NG_iYQxOA_L2gOMU",
  authDomain: "sahilchatapp-749c4.firebaseapp.com",
  projectId: "sahilchatapp-749c4",
  storageBucket: "sahilchatapp-749c4.appspot.com",
  messagingSenderId: "6774823448",
  appId: "1:6774823448:web:0c2a5751a873c0ee2e416d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();