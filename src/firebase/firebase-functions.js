/* eslint-disable no-console */
// Sign up for new accounts:

export const createUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

// Sign up with Google:
export const registerGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

// Sign in:

export const signInUser = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

// Email Verification:

export const emailVerification = () => firebase.auth()
  .currentUser.sendEmailVerification();

// Sign out

export const signOutUser = () => firebase.auth().signOut();

// Current user:
export const currentUser = () => firebase.auth().currentUser;

// OnAuthStateChanged
export const onAuthStateChanged = (callback) => firebase.auth().onAuthStateChanged(callback);
