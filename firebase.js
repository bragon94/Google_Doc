import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDw1fe1Nlgl6X6iVh8OMONGLYVktIHWlD4",
  authDomain: "doc-28dfc.firebaseapp.com",
  projectId: "doc-28dfc",
  storageBucket: "doc-28dfc.appspot.com",
  messagingSenderId: "657644269343",
  appId: "1:657644269343:web:b497a4fcf42855d2a68a2a"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
