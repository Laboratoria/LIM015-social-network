import firebase from './firebase.js';
// --------------------------------- VIEW SIGN UP ---------------------------------
// CREAR NUEVO USUARIO CON FIREBASE
export const registerWithFirebase = (email, password, errores) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      errores.textContent = '';
      window.location.hash = '#/login';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case 'auth/email-already-in-use':
          errores.textContent = '⚡ El correo electrónico ingresado ya existe ⚡';
          break;
        case 'auth/invalid-email':
          errores.textContent = '⚡ Lo lamentamos, el correo que ingresaste no es valido ⚡';
          break;
        default:
          errores.textContent = errorMessage;
      }
    });
};

// --------------------------------- VIEW INICIO DE SESION ---------------------------------
// LOGUEARSE CON USUARIO EXISTENTE EN FIREBASE
export const login = (email, password, errores) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      window.location.hash = '#/timeLine';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case 'auth/wrong-password':
          errores.textContent = '⚡ La contraseña es incorrecta ⚡';
          break;
        case 'auth/invalid-email':
          errores.textContent = '⚡ El correo ingresado no es válido ⚡';
          break;
        case 'auth/user-not-found':
          errores.textContent = '⚡ Usuario y/o contraseña incorrecta ⚡';
          break;
        case 'auth/too-many-requests':
          errores.textContent = '⚡ Superó su numero de intentos permitidos, vuelva a intentarlo luego ⚡';
          break;
        default:
          errores.textContent = errorMessage;
      }
    });
};

// LOGUEARSE CON FACEBOOK
export const loginWithFacebook = () => {

};
