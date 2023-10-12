// Import the functions you need from the SDKs you need
import {
  User,
  signOut,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "todo-native-app-304ed",
  messagingSenderId: "418580527740",
  authDomain: "todo-native-app-304ed.firebaseapp.com",
  storageBucket: "todo-native-app-304ed.appspot.com",
  appId: "1:418580527740:web:736fb96fb5e99b31e1a7f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default getFirestore(app);
const auth = getAuth();

//signup reusable function module
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
//signin reusable function module
export function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
//logout reusable function module
export function Logout() {
  return signOut(auth);
}
//Google auth
export function googleAuth() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}
//custom hook for signUp
export function UseAuth() {
  const [currentUser, setCurrentUser] = (null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);
  return currentUser;
}
