// TODO AVERIGUAR
import { userSignIn, loginFacebook, loginGoogle } from '../firebase/autenticacion.js';

// Para que es el changeRoute?
const changeRoute = (route) => {
  window.location.hash = route;
};

export const signIn = () => {
  window.event.preventDefault();
  const email = document.querySelector('#username').value;
  const password = document.querySelector('#password1').value;

  return userSignIn(email, password)
    .then((result) => {
      if (result.user.emailVerified === false) {
        document.getElementById('error').innerHTML = 'No has verificado tu dirección de email';
      } else {
        changeRoute('#/home');
      }
      console.log(result);
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

export const resetPasword = () => {
  const email = document.querySelector('#username').value;
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      console.log('Se ha enviado la nueva contraseña');
    }).catch((error) => {
      console.error(error);
    });
};

export const salir = () => {
  firebase.auth().signOut().then(() => {
    console.log('Lograste salir');
  }).catch((error) => {
    console.log('Hubo un error', error);
  });
};
