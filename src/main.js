// // Este es el punto de entrada de tu aplicacion
import { init } from './views-controllers/router';

// Your web app's Firebase configuration
window.addEventListener('load', () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyD64RiSC0mtVLCRcE1pW4EwQHu8emnwejk',
    authDomain: 'ibook-pe1657.firebaseapp.com',
    projectId: 'ibook-pe1657',
    storageBucket: 'ibook-pe1657.appspot.com',
    messagingSenderId: '131692458164',
    appId: '1:131692458164:web:067f32cc8a3d4457dda7e1',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  init();
});
