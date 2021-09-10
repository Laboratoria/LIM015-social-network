export const initialization = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyArJDNhJXShcMtXkp_PsOCvJXz6MDygWvs",
    authDomain: "pets-lovers-561e8.firebaseapp.com",
    projectId: "pets-lovers-561e8",
    storageBucket: "pets-lovers-561e8.appspot.com",
    messagingSenderId: "392181922252",
    appId: "1:392181922252:web:1b63378406472e287c8569",
    measurementId: "G-2KVQK63381",
  };
  firebase.initializeApp(firebaseConfig);
};

initialization();

export const auth = firebase.auth();
/* import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider(); */

//ojo
/* import { getAuth, linkWithRedirect, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

export function registerUserNew(){
  const auth = getAuth();
  linkWithRedirect(auth.currentUser, provider)
    .then (resolve => {
      console.log("fue registrado")
    })
    .catch(function(err) {
      console.log("error"+ err)
    })
  }
 */

// const googleImg = document.querySelector('#fondo')
// googleImg.addEventListener('click',  e => {
//   e.preventDefault();
//   const provider = new firebase.auth.GoogleAuthProvider();
//   auth.singnInWithPopup(provider)
//   .then (resolve => {
//     console.log('registrado');
//   })
//   .catch(function(err) {
//     console.log("error"+ err);
// })
