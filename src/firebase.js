import firebase from "firebase/app";
import "firebase/database";

const fbConfig = {
  apiKey: "AIzaSyBWAixLNeBHS4eL8gFh9mMrIN0XPZSUKjI",
  authDomain: "greta-challenge.firebaseapp.com",
  databaseURL: "https://greta-challenge.firebaseio.com",
  projectId: "greta-challenge",
  storageBucket: "greta-challenge.appspot.com",
  messagingSenderId: "1044229263691",
  appId: "1:1044229263691:web:b142b4f43d48854d0f18ce",
  measurementId: "G-5Y702RCELW"
};

firebase.initializeApp(fbConfig);

export { firebase };
