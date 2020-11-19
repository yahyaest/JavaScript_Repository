import firebase from "firebase";

// Connect firebase to our react frontend

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2vNcGqp5_cTZsC80HUX1aIBr27_cFImg",
  authDomain: "clone-9d194.firebaseapp.com",
  databaseURL: "https://clone-9d194.firebaseio.com",
  projectId: "clone-9d194",
  storageBucket: "clone-9d194.appspot.com",
  messagingSenderId: "374693111574",
  appId: "1:374693111574:web:4a4262aad195d8da2fd237",
  measurementId: "G-SWK9W97VCP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
