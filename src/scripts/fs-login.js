import { auth } from './fs-config.js';

// const auth = firebase.auth();

// SIGN UP
export const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

// SIGN IN
export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

// GOOGLE LOGIN
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

// LOG OUT
export const logout = () => auth.signOut();
