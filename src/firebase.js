import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAuqserm-7oTMbAE2BZdJSStyFS0IhyLVQ",
  authDomain: "fb-messenger-clone-johannamag.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-johannamag.firebaseio.com",
  projectId: "fb-messenger-clone-johannamag",
  storageBucket: "fb-messenger-clone-johannamag.appspot.com",
  messagingSenderId: "477748760855",
  appId: "1:477748760855:web:490a8e3b8563488dc5a752",
});

const db = firebaseApp.firestore();

export default db;
