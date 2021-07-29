import { loginEmail, loginFacebook, loginGoogle, currentUser } from '../firebase/autenticacion.js';

const changeRoute = (route) => {
  window.location.hash = route;
};

export const signIn = () => {
  window.event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  loginEmail(email, password).then((result) => {
    // observador();
    // console.log(result);
    // console.log(result.user.emailVerified);
    if (result.user.emailVerified === false) {
      document.getElementById('error').innerHTML = 'No has verificado tu dirección de email';
    } else {
      changeRoute('#/home');
    }
  }).catch((error) => {
    const errorMessage = error.message;
    if (email === '' || password === '') {
      document.getElementById('error').innerHTML = 'Ingresa los campos completos';
    } else if (errorMessage) {
      document.getElementById('error').innerHTML = 'La contraseña no es válida o el usuario no está registrado.';
    }
  });
};

export const signInFb = () => {
  loginFacebook().then((response) => {
    // console.log(response);
    changeRoute('#/home');
  }).catch((error) => {
    // console.log(error);
  });
};

export const signInWithGoogle = () => {
  loginGoogle().then((response) => {
    // console.log(response);
    // console.log(currentUser());
    changeRoute('#/home');
  }).catch((error) => {
    // console.log(error);
  });
};
