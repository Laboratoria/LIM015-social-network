// import firebase from 'firebase';
// import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyBmuPuol1G8A-QpcLM4uii_5BY942WqEoU',
  authDomain: 'anime-forum-215d6.firebaseapp.com',
  projectId: 'anime-forum-215d6',
  storageBucket: 'anime-forum-215d6.appspot.com',
  messagingSenderId: '958811000471',
  appId: '1:958811000471:web:2d5f5089cd2420f413a3d2',
  measurementId: 'G-J7PWEV55T7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
