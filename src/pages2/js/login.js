/* eslint-disable padded-blocks */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
// Configuracion de Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyAYNogOBTtpXWz5lW144gQCysFXlIyB1DY',
  authDomain: 'proyecto-laruta.firebaseapp.com',
  projectId: 'proyecto-laruta',
  storageBucket: 'proyecto-laruta.appspot.com',
  messagingSenderId: '942473781570',
  appId: '1:942473781570:web:8505bad8453a8f810e68db',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const login = (e) => {
  e.preventDefault();

  const emailUser = document.getElementById('user').value;
  const password = document.getElementById('password').value;

  // https://firebase.google.com/docs/web/setup#available-libraries

  // Este es el enlace para habilitar la autenticación de firebase (se copia html)
  firebase.auth().signInWithEmailAndPassword(emailUser, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log('se conecto firebase');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
const register = (e) => {
  e.preventDefault();

  const nameRegister = document.getElementById('name').value;
  const emailUser = document.getElementById('user').value;
  const passWord = document.getElementById('passWord').value;
  const confirmPass = document.getElementById('confirmPass').value;

  if (passWord == confirmPass) {

    firebase.auth().createUserWithEmailAndPassword(passWord, confirmPass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('conexion firebase register');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

  } else {

    alert("Las contraseñas no coiciden")
  }

};

export { login, register };
