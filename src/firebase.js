import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUOtaURf3g0vg1tFBnMcozsK5MbQT1rYw",
  authDomain: "news-6fd0f.firebaseapp.com",
  databaseURL: "https://news-6fd0f.firebaseio.com",
  projectId: "news-6fd0f",
  storageBucket: "news-6fd0f.appspot.com",
  messagingSenderId: "704118390624",
  appId: "1:704118390624:web:ea84c6a7d2277da1d8e805",
  measurementId: "G-722RGXLPV7"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;
