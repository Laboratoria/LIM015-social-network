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
      console.log(errorMessage);
      switch (errorCode) {
        case 'auth/email-already-in-use':
          errores.textContent = '⚡ El correo electrónico ingresado ya existe ⚡';
          break;
        case 'auth/invalid-email':
          errores.textContent = '⚡ Lo lamentamos, el correo que ingresaste no es valido ⚡';
          break;
        default:
          errores.textContent = '⚡ Lo lamentamos, ocurrio un error inesperado ⚡';
      }
    });
};

// --------------------------------- VIEW INICIO DE SESION ---------------------------------
