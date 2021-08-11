// tracking user log in or log out
const auth = firebase.auth();
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('user logged in ');
  } else {
    console.log('user logged out');
  }
});

// Login
export const login = (email, password) => {
  auth.signInWithEmailAndPassword(email, password) // promise
    .then((userCredential) => {
      console.log(userCredential, 'login in');
      console.log('Redirijo despues de login'); // redirigir
    }).catch((error) => {
      console.log(error, 'error');
    });
};
// signup
export const signUp = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential, 'sign up');
      console.log('Redirijo despues de signup');
    }).catch((error) => {
      console.log(error, 'error');
    });
};

// Google Authentication
export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  // plano, una copia del plano para reutilizarlo -- es una nueva instancia de authprovider
  auth.signInWithPopup(provider)
    .then(() => {
      console.log('Redirijo despues de login');
    }).catch((error) => {
      console.log(error, 'cant access');
    });
};
// Facebook Authentication
export const facebookAuth = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => {
      console.log('Redirijo despues de login');
    }).catch((error) => {
      console.log(error, 'cant access to facebook');
    });
};
// Log out
export const logOutPage = () => {
  auth.signOut()
    .then(() => {
      console.log(' user log out');
      console.log('Redirijo despues de signOut');
    });
};
