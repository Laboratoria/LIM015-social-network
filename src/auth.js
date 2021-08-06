// auth status changes
// const auth = firebase.auth();
// auth.onAuthStateChanged((user) => {
//   if (user) {
//     console.log('user log in');
//   } else {
//     console.log('user logged out');
//   }
// });
// login
export const login = (email, password) => {
  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, password) // promise
    .then(() => {
      // login.reset();
      window.location.href = '#news'; // redirigir
    }).catch((error) => {
      console.log(error, 'error');
    });
};
// signup
export const signUp = (email, password) => {
  const auth = firebase.auth();
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = '#news';
    }).catch((error) => {
      console.log(error, 'error');
    });
};

// Google Authentication
export const googleAuth = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  // plano, una copia del plano para reutilizarlo -- es una nueva instancia de authprovider
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log(result, 'sign in with google');
    }).catch((error) => {
      console.log(error, 'cant access');
    });
};
// Facebook Authentication
export const facebookAuth = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log(result, 'sign in with facebook');
    }).catch((error) => {
      console.log(error, 'cant access to facebook');
    });
};
