import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfdMsFrw15AdT3QWIn0I0IopMyH5cN2DM",
  authDomain: "the-mobile-shop-5ed08.firebaseapp.com",
  projectId: "the-mobile-shop-5ed08",
  storageBucket: "the-mobile-shop-5ed08.appspot.com",
  messagingSenderId: "141335843825",
  appId: "1:141335843825:web:a705822cb4d2a95bdeea50",
  measurementId: "G-9DDLRXT6X8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};