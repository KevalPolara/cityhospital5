// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyIHjXcf4NgdBRvWzJb_ZKL4k0fC-OmFI",
  authDomain: "cityhospital-823db.firebaseapp.com",
  projectId: "cityhospital-823db",
  storageBucket: "cityhospital-823db.appspot.com",
  messagingSenderId: "459880919961",
  appId: "1:459880919961:web:6425c88d6884321794d908",
  measurementId: "G-VR61T6SKKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);