// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIHyZ4NYCTTVQjXd208tbDDOprdT1wLzM",
  authDomain: "oscarlinkedin-250dd.firebaseapp.com",
  projectId: "oscarlinkedin-250dd",
  storageBucket: "oscarlinkedin-250dd.appspot.com",
  messagingSenderId: "473568178075",
  appId: "1:473568178075:web:2ac97f98d41152e672bb3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  serverTimestamp,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
};
