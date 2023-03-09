// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgl2fuVRi_K6Su7Ti4NjEtbrmGW79LFgE",
    authDomain: "dragon-news-c424e.firebaseapp.com",
    projectId: "dragon-news-c424e",
    storageBucket: "dragon-news-c424e.appspot.com",
    messagingSenderId: "1055987265369",
    appId: "1:1055987265369:web:0ec79b24119dd1ff65a648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;