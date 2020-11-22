import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyA6ku-0JwM8ItRrDRLgvvJWeoM6igeUawc",
    authDomain: "olx-app-2e268.firebaseapp.com",
    databaseURL: "https://olx-app-2e268.firebaseio.com",
    projectId: "olx-app-2e268",
    storageBucket: "olx-app-2e268.appspot.com",
    messagingSenderId: "1008196397729",
    appId: "1:1008196397729:web:3b647f95255f216c62dee0",
    measurementId: "G-1C34MT1YQX"
  };

  firebase.initializeApp(firebaseConfig); 
  export default firebase;