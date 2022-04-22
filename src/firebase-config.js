// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAavfYRM-AdKick2FNNIkjOH4zBq-Lh3Do",
    authDomain: "generator-4d9a6.firebaseapp.com",
    projectId: "generator-4d9a6",
    storageBucket: "generator-4d9a6.appspot.com",
    messagingSenderId: "249955391030",
    appId: "1:249955391030:web:b09229660d1606f5186a97",
    measurementId: "G-SR5XRJ3L57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
