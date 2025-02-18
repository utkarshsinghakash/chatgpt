// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider, signInWithPopup, signOut };

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxFyWNOmh7Fpigz3wbbUbHwWHRdELXzNE",
  authDomain: "chatgpt-b45c9.firebaseapp.com",
  projectId: "chatgpt-b45c9",
  storageBucket: "chatgpt-b45c9.firebasestorage.app",
  messagingSenderId: "681944730652",
  appId: "1:681944730652:web:d1906f47721930c7d523d9",
  measurementId: "G-4PDYL0C6MN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Functions for authentication
const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Google sign-in error:", error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export { auth, signInWithGoogle, logout };
