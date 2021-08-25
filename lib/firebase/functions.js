import {
  auth,
/*   signOut,
  providerGoogle,
  providerFacebook, */
} from './config.js';

export const addUser = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export const loginUser = (email, password) => auth.signInWithEmailAndPassword(email, password);
// export const authUser = auth.onAuthStateChanged();
// export const currentUser = auth.currentUser;
