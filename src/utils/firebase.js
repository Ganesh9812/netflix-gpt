// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhfEWnWHASNkBUNL9tYMaQgvsw5lILjVs",
  authDomain: "netflixgpt-601e9.firebaseapp.com",
  projectId: "netflixgpt-601e9",
  storageBucket: "netflixgpt-601e9.appspot.com",
  messagingSenderId: "116676602366",
  appId: "1:116676602366:web:9a93dc3edf1370ea6ef8af",
  measurementId: "G-0W6VNEPDKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
