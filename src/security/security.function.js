/* eslint-disable no-console */
/* eslint-disable max-len */
export const emailVerication = () => firebase.auth().currentUser.sendEmailVerification();

export const registerWithEmail = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
export async function login() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  try {
    const response = await firebase.auth().signInWithPopup(googleProvider);
    console.log(response);
    return response.user;
  } catch (error) {
    throw new Error(error);
  }
}
export function logout() {
  firebase.auth().signOut();
}
export const logInWithEmail = (email, password) => {
  const loginn = firebase.auth().signInWithEmailAndPassword(email, password);
  return loginn;
};
export const logInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
/* export const registerWithEmail = (email, password) => firebase.auth()
   .createUserWithEmailAndPassword(email, password); */
