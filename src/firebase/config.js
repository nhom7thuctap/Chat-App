import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyACJs2TUnW8MaCMW8cw5uFxa-KQty9Oa8Y",
  authDomain: "real-time-chat-6d1db.firebaseapp.com",
  projectId: "real-time-chat-6d1db",
  storageBucket: "real-time-chat-6d1db.appspot.com",
  messagingSenderId: "244381008657",
  appId: "1:244381008657:web:264b8c478893d36b1082b0",
  measurementId: "G-E7DC5KQVWX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  // auth.useEmulator("http://localhost:9099");
  // db.useEmulator("localhost", "8080");
}

export { db, auth };
export default firebase;
