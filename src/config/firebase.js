const firebase = require('firebase')

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
let firebaseConn = firebase.initializeApp(firebaseConfig)
