/* eslint-disable no-console */
// import { auth } from '../security/firebase.js';
/* funcion que solo sirve para pintar los valores de emai y pasword
en la consola */

export function registerValidation(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password);
}

registerValidation('juanapinto@gmail.com', '123456');
export function showLogin() {
  const buttonLogin = document.querySelector('#btnGoogle');
  buttonLogin.addEventListener('click', async (e) => {
    try {
      await (e);
    } catch (error) {
      console.log(error);
    }
  });
}

// const provider = new firebase.auth.GoogleAuthProvider();

export async function login() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const response = await firebase.auth().signInWithPopup(provider);
    console.log(response);
    return response.user;
  } catch (error) {
    throw new Error(error);
  }
}
export function logout() {
  firebase.auth().signOut();
}
