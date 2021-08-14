import firebase from './firebase.js';
// METODO QUE DETECTA LA AUTENTICACION DEL USUARIO
export const firebaseWatcher = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('el usuario esta logueado');
      console.log(uid);
    } else {
      // User is signed out
      console.log('al usuario le falta loguearse');
    }
  });
};

// METODO PARA CREAR UNA COLECCION EN FIRESTORE
