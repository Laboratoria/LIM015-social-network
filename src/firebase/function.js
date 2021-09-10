// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { registerUserNew}from "../firebase/farebase.js";
// export function resgisterUsuario{
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password1)
//       .then((userCredential) => {
//         if (userCredential==email){
//             au
//         }
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       });
// }
import { auth } from "./firebase.js";

//funcion que solo sirve para pintar los valores de emai y pasword
//en la consola
export function events() {
  const signin = document.querySelector(".btn");
  signin.addEventListener("click", (e) => {
    e.preventDefault();
    const signinEmail = document.querySelector(".email").value;
    const singnPassword = document.querySelector(".password").value;
    console.log(signinEmail, singnPassword);
  });
}

export function showLogin() {
  const buttonLogin = document.querySelector("#btnGoogle");
  buttonLogin.addEventListener("click", async (e) => {
    try {
      await login();
    } catch (error) {
      console.log(error);
    }
  });
}

// export function google() {
//     const googleLogin= document.querySelector("#logoGmail");
//     googleLogin.addEventListener("click", (e) => {
//         console.log('inicio google');

//     })
// }
const provider = new firebase.auth.GoogleAuthProvider();

export async function login() {
  try {
    const response = await auth.signInWithPopup(provider);
    console.log(response);
    return response.user;
  } catch (error) {
    throw new Error(error);
  }
}

export function logout() {
  auth.signOut();
}
