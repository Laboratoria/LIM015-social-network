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
const auth = firebase.auth();
// cada vez que le enviamos datos a Firebase, le pedimos que lo valide con firebase.auth
const fs = firebase.firestore();
firebase.analytics();
const signupForm = document.querySelector('.sign-up-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('signup-user').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  console.log(user, email, password);
  // debajo de "auth" colocamos un método de Firebase, que va a permitirnos enviar los datos.
  // lo que capturamos en el value, le brindando a Firebase para que pueda validarlo.
  auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
    console.log('sign up');
  });
});

// SING IN
const signinForm = document.querySelector('.sign-in-form');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;
  console.log(email, password);

  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    console.log('sign in');
  });
});
