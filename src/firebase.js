import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDgXpPx_o2WAUWlG5dEprqlVOqlD5P5BEQ",
  authDomain: "slack-clone-6f85b.firebaseapp.com",
  databaseURL: "https://slack-clone-6f85b.firebaseio.com",
  projectId: "slack-clone-6f85b",
  storageBucket: "slack-clone-6f85b.appspot.com",
  messagingSenderId: "934678205057",
  appId: "1:934678205057:web:659cc12564b3d84ef3f380",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
