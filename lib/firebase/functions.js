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
export const sendPasswordResetEmail = (email) => auth.sendPasswordResetEmail(email);
// export const authUser = auth.onAuthStateChanged();
// export const currentUser = auth.currentUser;
