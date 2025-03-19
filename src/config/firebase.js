// Import the functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFRernP4JNrhOENTGfUcQp58Ozqy_oBs0",
  authDomain: "my-project-89cef.firebaseapp.com",
  databaseURL: "https://my-project-89cef-default-rtdb.firebaseio.com",
  projectId: "my-project-89cef",
  storageBucket: "my-project-89cef.appspot.com",
  messagingSenderId: "528363132236",
  appId: "1:528363132236:web:3b59fb69e69e9ae50eabe9",
  measurementId: "G-3XWNPSV7QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app)