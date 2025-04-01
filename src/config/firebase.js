const firebase = require("firebase/app") 
const admin = require('firebase-admin');
const { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendEmailVerification, 
  sendPasswordResetEmail,
  deleteUser

} = require("firebase/auth") ;
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
const serviceAccount = require("../firebaseService.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


firebase.initializeApp(firebaseConfig);


module.exports = {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  admin,
  deleteUser
};