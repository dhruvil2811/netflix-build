import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJlxhCwQ3XPDxgdBxlUm6scLjnm1E8pvM",
  authDomain: "netflix-clone-f7319.firebaseapp.com",
  projectId: "netflix-clone-f7319",
  storageBucket: "netflix-clone-f7319.appspot.com",
  messagingSenderId: "207592167498",
  appId: "1:207592167498:web:fd853a7a578c300c6d2eb3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
