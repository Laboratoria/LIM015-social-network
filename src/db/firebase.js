// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";

const firebaseConfig = {
    apiKey: 'AIzaSyBAWb1GlSRBtHRb5zpNKVRRmyYjigfWtNQ',
    authDomain: 'courseshare-fb.firebaseapp.com',
    projectId: "courseshare-fb",
    storageBucket: "courseshare-fb.appspot.com",
    messagingSenderId: "528188771070",
    appId: "1:528188771070:web:998fe7bc211effbc3333af"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
