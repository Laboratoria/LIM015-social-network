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
firebase.firestore();
firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();

const signupForm = document.querySelector('.sign-up-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // const userName = document.getElementById('signup-user').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    /*  const user = firebase.auth().currentUser;
      if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
        const userName = document.getElementById('signup-user').value;
        let name = user.displayName;
        name = userName;
        const userEmail = user.email;
        const uid = user.uid;
        console.log(name, userEmail, uid);
      } */
      // Signed in
      console.log('signed up');
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      alert('La contraseña debe tener mínimo 6 caracteres \n 〜(꒪꒳꒪)〜');
      console.log(error.code, error.message);
    });
});

// SING IN
const signinForm = document.querySelector('.sign-in-form');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('signed in', user);
      // ...
    })
    .catch((error) => {
      console.log(error.code, error.message);
      alert('Contraseña o Email incorrecto \n (╯ರ ~ ರ)╯︵ ┻━┻');
    });
});

// GOOGLE LOGIN
const googleBtn = document.querySelector('.google');
googleBtn.addEventListener('click', () => {
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then((result) => {
      const credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(credential.accessToken);
      // The signed-in user info.
      console.log(result.user);
      console.log('signed in with Google');
      // ...
    })
    .catch((error) => {
      console.error('no se pudo iniciar sesión con gugul :c');
      console.log(error.code);
      console.log(error.message);
      // The email of the user's account used.
      console.log(error.email);
      // The firebase.auth.AuthCredential type that was used.
      console.log(error.credential);
      // ...
    });
});

// const facebookBtn = document.querySelector('.facebook');
