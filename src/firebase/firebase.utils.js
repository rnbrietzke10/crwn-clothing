import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQzYvZOp9Z8ofrIDKo40L8uwuLqwcjV3o",
  authDomain: "crwn-db-8ec60.firebaseapp.com",
  projectId: "crwn-db-8ec60",
  storageBucket: "crwn-db-8ec60.appspot.com",
  messagingSenderId: "976808189044",
  appId: "1:976808189044:web:1bef9e619dcca112200521",
  measurementId: "G-986273QXCS",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
