import firebase from 'firebase';
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
var config = {
    apiKey: "AIzaSyAxui9T3ePQBS6x_CcujEdSpvS7rwp9ohQ",
    authDomain: "meetme-personal.firebaseapp.com",
    databaseURL: "https://meetme-personal.firebaseio.com",
    projectId: "meetme-personal",
    storageBucket: "meetme-personal.appspot.com",
    messagingSenderId: "812062294140",
    appId: "1:812062294140:web:81586825ce0f8eec4009f9",
};
const fb = firebase.initializeApp(config);
const db = firebase.firestore();
export {
    fb,
    db
};