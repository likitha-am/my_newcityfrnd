// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6-Y6rj4z4QwqNpA6ZOnPq4PlFYWllL0w",
  authDomain: "mynewfrnd.firebaseapp.com",
  projectId: "mynewfrnd",
  storageBucket: "mynewfrnd.firebasestorage.app",
  messagingSenderId: "980229359110",
  appId: "1:980229359110:web:1fd2471bf3376a8cbce587",
  measurementId: "G-DKY9SQ14Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);