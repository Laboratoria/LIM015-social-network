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
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
};

// ------------- OTROS METODOS -------------
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
