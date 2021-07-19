import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyBwuk9TkYm_AVywE64msxiiiF7vSZbpKq0",
    authDomain: "sistema-a0ae4.firebaseapp.com",
    projectId: "sistema-a0ae4",
    storageBucket: "sistema-a0ae4.appspot.com",
    messagingSenderId: "769637122258",
    appId: "1:769637122258:web:630da5cf9dd11d6837ed0b",
    measurementId: "G-JNCYHPQ72N"
  };
  
  if(!firebase.apps.length){

  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;