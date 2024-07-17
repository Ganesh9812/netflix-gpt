// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSjTqlkR4qRHKxli5yslz_m3o6VhOkfg8",
  authDomain: "netflixpavangpt.firebaseapp.com",
  projectId: "netflixpavangpt",
  storageBucket: "netflixpavangpt.appspot.com",
  messagingSenderId: "297167741744",
  appId: "1:297167741744:web:5727830c53be94cb309ef5",
  measurementId: "G-BLHZ77FR8T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();
