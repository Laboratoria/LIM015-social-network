// Sign up for new accounts:

export const createUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

// Sign up with Google:
export const registerGoogle = () => {
  // const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

// Sign in:

export const signInUser = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

// Email Verification:

export const emailVerification = () => firebase.auth()
  .currentUser.sendEmailVerification;

// Verificar usuario activo:

// const user = firebase.auth().currentUser;

// if (user) {
//   // User is signed in, see docs for a list of available properties
//   // https://firebase.google.com/docs/reference/js/firebase.User
//   // ...
// } else {
//   // No user is signed in.
// }
