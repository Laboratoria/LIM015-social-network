import { auth } from './fs-config.js';

// const usuarios = firebase.firestore().collection('InfoUser');
// SIGN UP
export const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

// SIGN IN
export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

// GOOGLE LOGIN
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

// Log out
export const logout = () => {
  auth.signOut().then(() => {
    console.log('signed out');
    localStorage.removeItem('user');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    window.location.reload();
  }).catch((error) => {
    console.log(error);
  });
};
