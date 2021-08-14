import firebase from './firebase.js';
// --------------------------------- VIEW REGISTRARSE ---------------------------------
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
      const credential = result.credential;
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const accessToken = credential.accessToken;
      window.location.hash = '#/timeLine';
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};

// LOGUEARSE CON GOOGLE
export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    console.log(result);
    console.log('google sign in');
    window.location.hash = '#/timeLine';
  })
    .catch((error) => {
      console.log(error);
    });
};

// ------------- OTROS METODOS -------------
// METODO PARA CERRAR SESION
export const logOutUser = () => {
  firebase.auth().signOut().then(() => {
    console.log('signup out successful');
    window.location.hash = '#/home';
  });
};

// METODO QUE OCULTA LOS LINKS - falta llamarlo
export const loginCheck = (user, e1, e2, e3, e4, e5, e6) => {
  if (user) {
    e1.style.display = 'block';
    e2.style.display = 'block';
    e3.style.display = 'block';
    e4.style.display = 'none';
    e5.style.display = 'none';
    e6.style.display = 'none';
  } else {
    e1.style.display = 'none';
    e2.style.display = 'none';
    e3.style.display = 'none';
    e4.style.display = 'block';
    e5.style.display = 'block';
    e6.style.display = 'block';
  }
};
