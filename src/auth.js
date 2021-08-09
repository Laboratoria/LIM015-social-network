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

// const fireStore = firebase.firestore();

export const login = (email, password) => {
  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, password) // promise
    .then((userCredential) => {
      console.log(userCredential, 'login in');
      window.location.href = '#news'; // redirigir
    }).catch((error) => {
      console.log(error, 'error');
    });
};
// signup
export const signUp = (email, password) => {
  const auth = firebase.auth();
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential, 'sign up');
      // window.location.href = '#news';
    }).catch((error) => {
      console.log(error, 'error');
    });
};

// Google Authentication
export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  // plano, una copia del plano para reutilizarlo -- es una nueva instancia de authprovider
  const auth = firebase.auth();
  auth.signInWithPopup(provider)
    .then(() => {
      window.location.href = '#news';
    }).catch((error) => {
      console.log(error, 'cant access');
    });
};
// Facebook Authentication
export const facebookAuth = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  const auth = firebase.auth();
  auth.signInWithPopup(provider)
    .then(() => {
      window.location.href = '#news';
    }).catch((error) => {
      console.log(error, 'cant access to facebook');
    });
};
// Log out
export const logOutPage = () => {
  const auth = firebase.auth();
  auth.signOut()
    .then(() => {
      console.log('log out');
    });
};
