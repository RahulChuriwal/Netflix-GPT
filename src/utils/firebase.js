// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4XArnYSm-_YBbqffxmkEsPPcGX57SNXI",
  authDomain: "netflixgpt-824f7.firebaseapp.com",
  projectId: "netflixgpt-824f7",
  storageBucket: "netflixgpt-824f7.appspot.com",
  messagingSenderId: "1013120257573",
  appId: "1:1013120257573:web:794de4ec18b8e50395b9cc",
  measurementId: "G-6FWRR5SFYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();