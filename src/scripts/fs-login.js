/* eslint-disable max-len */

// SIGN UP
export const signUp = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// SIGN IN
export const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

// GOOGLE LOGIN
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// LOG OUT
export const logout = () => firebase.auth().signOut();
