import { changeRoute, pages } from './lib/router.js';
import {
  login, googleAuth, facebookAuth, signUp,
} from './auth.js';

// al recargar la pagina agrega el html
const root = document.querySelector('#root');
const pathName = window.location.pathname;
const pathNameNoSlash = pathName.replace('/', '');
if (pathName === '/') window.location.href = '/login';
root.innerHTML = pages[pathNameNoSlash];

// Paso 1 cambia el html al hacer click
window.addEventListener('hashchange', () => {
  const hashChange = window.location.hash;
  const hashChangeNoSlash = hashChange.replace('#', '');
  root.innerHTML = pages[hashChangeNoSlash];
  changeRoute(hashChange);
});
// Al hacer click atras y adelante te muestra el contenido correspondiente
window.onpopstate = () => {
  root.innerHTML = pages[pathNameNoSlash];
};

if (pathName === '/login') {
  const loginForm = document.querySelector('#login');
  const email = document.querySelector('#loginemail');
  const password = document.querySelector('#loginpassword');
  const googleIcon = document.querySelector('#googlesvg');
  const facebookIcon = document.querySelector('#fbsvg');
  const buttonLogin = document.querySelector('#button-login');

  // function for Login Authentication
  buttonLogin.addEventListener('click', () => {
    const emailValue = email.value;
    const passwordValue = password.value;
    login(emailValue, passwordValue);
    loginForm.reset();
  });

  // function for Google Authentication
  googleIcon.addEventListener('click', () => {
    googleAuth();
  });
  // function for FB Authentication
  facebookIcon.addEventListener('click', () => {
    facebookAuth();
  });
}

if (pathName === '/signup') {
  const signupform = document.querySelector('#signupform');
  const email = document.querySelector('#signupemail');
  const password = document.querySelector('#signuppassword');
  const signUpButton = document.querySelector('#signupbutton');

  // function for SignUp
  signUpButton.addEventListener('click', () => {
    const emailValue = email.value;
    const passwordValue = password.value;
    signUp(emailValue, passwordValue);
    signupform.reset();
  });
}
