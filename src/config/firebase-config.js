import firebase from 'firebase';
//The core Firebase JS SDK is always required and must be listed first
// importScripts("https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js");

//TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries 

// Your Firebase configuration
var firebaseConfig = {
    apiKey: "RandomAPIKey",
    authDomain: "random-86215.firebaseapp.com",
    databaseURL: "https://random.firebaseio.com",
    projectId: "random-86215",
    storageBucket: "random-86215.appspot.com",
    messagingSenderId: "8888888",
    appId: "some::id",
    measurementId: "G-SOMEID"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
firebase.analytics();

export { db };

