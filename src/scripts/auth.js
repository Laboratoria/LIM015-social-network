/* eslint-disable no-console */
import { auth } from './fs-config.js';

// email login
export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

// create new user in Firebase
export const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

// Google login
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

// logout
export const signOut = () => {
  auth.signOut().then(() => {
    console.log('signed-out');
    window.location.reload();
  }).catch((err) => {
    console.log(err);
  });
};

// onAuthStateChanged (admin. users in firebase)
export const currentUser = (callback) => auth.onAuthStateChanged((user) => callback(user));

// send email verification email to new user
export const emailVerification = () => {
  const user = firebase.auth().currentUser;
  return user.sendVerificationEmail();
};
