import firebase from './firebase.js';

// METODO QUE DETECTA LA AUTENTICACION DEL USUARIO - PENDIENTE DE RESOLVER
export const firebaseWatcher = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('esta conectado');
      document.querySelector('.home a').style.display = 'none';
      document.querySelector('.login a').style.display = 'none';
      document.querySelector('.signUp a').style.display = 'none';
      document.querySelector('.profile a').style.display = 'block';
      document.querySelector('.timeline a').style.display = 'block';
      document.querySelector('.logOut a').style.display = 'block';
      window.location.hash = '#/timeLine';
    } else {
      console.log('esta desconectado');
      document.querySelector('.home a').style.display = 'block';
      document.querySelector('.login a').style.display = 'block';
      document.querySelector('.signUp a').style.display = 'block';
      document.querySelector('.profile a').style.display = 'none';
      document.querySelector('.timeline a').style.display = 'none';
      document.querySelector('.logOut a').style.display = 'none';
    }
  });
};

// --------------------------------- VIEW REGISTRARSE ---------------------------------
// CREAR NUEVO USUARIO CON FIREBASE
export const registerWithFirebase = (email, password) => {
  const register = firebase.auth().createUserWithEmailAndPassword(email, password);
  return register;
};

// --------------------------------- VIEW INICIO DE SESION ---------------------------------
// LOGUEARSE CON USUARIO EXISTENTE EN FIREBASE
export const login = (email, password) => {
  const loginWithFirebase = firebase.auth().signInWithEmailAndPassword(email, password);
  return loginWithFirebase;
};

// LOGUEARSE CON FACEBOOK
export const loginWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  const authFb = firebase.auth().signInWithPopup(provider);
  return authFb;
};

// LOGUEARSE CON GOOGLE
export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const authGg = firebase.auth().signInWithPopup(provider);
  return authGg;
};

// ------------- OTROS METODOS -------------
// METODO PARA CERRAR SESION
export const logOutUser = () => {
  const logoutAction = firebase.auth().signOut();
  return logoutAction;
};
