import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyB5mp3k-zLGAFYupc5bLjvueaD-ie5io4o",
  authDomain: "react-slack-clone-128d9.firebaseapp.com",
  projectId: "react-slack-clone-128d9",
  storageBucket: "react-slack-clone-128d9.appspot.com",
  messagingSenderId: "239827901711",
  appId: "1:239827901711:web:09ad7f01c7bbdf625ef27a",
  measurementId: "G-Y9V6MSTSRD"
};
firebase.initializeApp(config);

export default firebase;