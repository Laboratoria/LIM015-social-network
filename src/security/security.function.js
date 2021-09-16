
import { auth } from "./firebase.js";

const googleProvider = new firebase.auth.GoogleAuthProvider();

//funcion que solo sirve para pintar los valores de emai y pasword
//en la consola
export function eventsRegister() {
  const signin = document.querySelector(".btn");
  signin.addEventListener("click", (e) => {
    e.preventDefault();
    const signinEmail = document.querySelector(".email").value;
    const singnPassword = document.querySelector(".password").value;
    //console.log(signinEmail, singnPassword);
  });
}

export const emailVerication = () => (
  firebase.auth().currentUser.sendEmailVerification()
);

export const registerWithEmail = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);



export function registerValidation (email, password) {
  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log(userCredential);
    const user = userCredential.user;
    // ...
  })
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
 
}
export async function login() {
  try {
    const response = await auth.signInWithPopup(googleProvider);
    console.log(response);
    return response.user;
  } catch (error) {
    throw new Error(error);
  }
}

export function logout() {
  auth.signOut();
}

export const logInWithEmail = (email, password) => {
  const login = firebase.auth().signInWithEmailAndPassword(email, password);
  return login;
};

export const logInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};



// export const registerWithEmail = (email, password) => firebase.auth()
//   .createUserWithEmailAndPassword(email, password);
