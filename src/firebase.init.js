// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1z9_d0sZ943lzx7PK2qdkQazc9OzuRlM",
  authDomain: "ema-john-simple-519d2.firebaseapp.com",
  projectId: "ema-john-simple-519d2",
  storageBucket: "ema-john-simple-519d2.appspot.com",
  messagingSenderId: "576734606046",
  appId: "1:576734606046:web:2676f0dc68336fb6c2084f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;