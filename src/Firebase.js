// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB8esD-fGp86mk9O15145tXXbRP4cUJlTQ",
  authDomain: "cityhospital-973be.firebaseapp.com",
  projectId: "cityhospital-973be",
  storageBucket: "cityhospital-973be.appspot.com",
  messagingSenderId: "725062703752",
  appId: "1:725062703752:web:1281b0e3b715d90ce71d3d",
  measurementId: "G-LTF906F0FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
