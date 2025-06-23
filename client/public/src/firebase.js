// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQUWUeK7GsdglmXGVxzBywdD0aRypn0EQ",
  authDomain: "future-social-c6012.firebaseapp.com",
  projectId: "future-social-c6012",
  storageBucket: "future-social-c6012.firebasestorage.app",
  messagingSenderId: "190654449484",
  appId: "1:190654449484:web:c295ea9af41599cb42b1e9",
  measurementId: "G-F64L7SFJTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);