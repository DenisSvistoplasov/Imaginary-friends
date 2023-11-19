// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import {browserSessionPersistence, getAuth, setPersistence} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtYEEwRrRzXYT-aoEb68uKksCe9M5xQQ4",
  authDomain: "testproject-83d07.firebaseapp.com",
  projectId: "testproject-83d07",
  storageBucket: "testproject-83d07.appspot.com",
  messagingSenderId: "479530905184",
  appId: "1:479530905184:web:287f5199df2b14f9e91d05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app);
export const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence);