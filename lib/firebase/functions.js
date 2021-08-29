/*
import {
  auth,
  signOut,
  providerGoogle,
  providerFacebook,
} from './config.js';
*/

// eslint-disable-next-line max-len
export const addUser = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
// eslint-disable-next-line max-len
export const loginUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
export const googleLogin = () => {
  // eslint-disable-next-line new-cap
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  const loginwithGoogle = firebase.auth().signInWithPopup(providerGoogle);
  return loginwithGoogle;
};
export const sendPasswordReset = (email) => firebase.auth().sendPasswordResetEmail(email);
export const sendEmail = () => firebase.auth().currentUser.sendEmailVerification();
export const onAuthStateChanged = (callback) => firebase.auth().onAuthStateChanged(callback);

// export const currentUser = auth.currentUser;
