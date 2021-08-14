
import firebase from "firebase/app";
import  'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA8zZXIrW5SQaeniwMzQItKr2_Cv4MA5LE",
    authDomain: "mayhemnation-d2c85.firebaseapp.com",
    projectId: "mayhemnation-d2c85",
    storageBucket: "mayhemnation-d2c85.appspot.com",
    messagingSenderId: "590873318229",
    appId: "1:590873318229:web:f3de6320e70492377d95dc"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();

 

 