const auth = firebase.auth();
const signUpButton = document.getElementById('signupbutton');
signUpButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('signupemail').value;
  const password = document.getElementById('signuppassword').value;
  auth.createUserWithEmailAndPassword(email, password) // promise
    .then((userCredential) => {
      console.log(userCredential, 'sign up');
    }).catch((error) => {
      console.log(error, 'error');
    });
});
// Google Authentication
const googleIcon = document.getElementById('googlesvg');
googleIcon.addEventListener('click', (e) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  // plano, una copia del plano para reutilizarlo -- es una nueva instancia de authprovider
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log(result, 'sign in with google');
    }).catch((error) => {
      console.log(error, 'cant access');
    });
});
// Facebook Authentication
const facebookIcon = document.getElementById('fbsvg');
facebookIcon.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(auth);
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log(result, 'sign in with facebook');
    }).catch((error) => {
      console.log(error, 'cant access to facebook');
    });
});
