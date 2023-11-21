// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeXYTR6V2RSvARihqqEByYSBySuycYSJY",
    authDomain: "elibrary-82c22.firebaseapp.com",
    projectId: "elibrary-82c22",
    storageBucket: "elibrary-82c22.appspot.com",
    messagingSenderId: "1043973129187",
    appId: "1:1043973129187:web:074758bea230da7bfc16d6",
    measurementId: "G-E9ZDPLD5QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)