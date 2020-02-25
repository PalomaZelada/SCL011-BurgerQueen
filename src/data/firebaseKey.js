import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBk25qezEHyn8sJJv4P1m_E9Xd6IAqq3Tw",
    authDomain: "burger-queen-9b026.firebaseapp.com",
    databaseURL: "https://burger-queen-9b026.firebaseio.com",
    projectId: "burger-queen-9b026",
    storageBucket: "burger-queen-9b026.appspot.com",
    messagingSenderId: "917931296985",
    appId: "1:917931296985:web:deba6b785896ff250dd6c8",
    measurementId: "G-VNHPFKH3LV"
  });


let db = firebase.firestore();
export default db;