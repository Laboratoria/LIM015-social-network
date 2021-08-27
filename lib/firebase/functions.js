import {
  auth,
/*   signOut,
  providerGoogle,
  providerFacebook, */
} from './config.js';

export const addUser = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export const loginUser = (email, password) => auth.signInWithEmailAndPassword(email, password);
export const googleLogin = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  const loginwithGoogle = auth.signInWithPopup(providerGoogle);
  return loginwithGoogle;
};
export const resetPassword = (email) => auth.sendPasswordResetEmail(email);
export const sendEmail = (user) => user.sendEmailVerification();
export const onAuthStateChanged = (callback) => auth.onAuthStateChanged(callback);
// export const currentUser = auth.currentUser;

export const resendEmail = (container, user, id) => {
  container.querySelector(id).addEventListener('click', () => {
    sendEmail(user);
  });
};
