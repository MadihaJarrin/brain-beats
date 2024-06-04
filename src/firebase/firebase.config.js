// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbafuBxfTA5wUzRjeWQMisKv-2XFDU53E",
    authDomain: "brain-beats-da988.firebaseapp.com",
    projectId: "brain-beats-da988",
    storageBucket: "brain-beats-da988.appspot.com",
    messagingSenderId: "690187794755",
    appId: "1:690187794755:web:7ee7e7cc9bde2ad21357f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;