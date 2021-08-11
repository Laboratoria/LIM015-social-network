import {
  login, googleAuth, facebookAuth, signUp, logOutPage,
} from '../auth.js';

export const onLoadLogin = () => {
  // const loginForm = document.querySelector('#login');
  const email = document.querySelector('#loginemail');
  const password = document.querySelector('#loginpassword');
  const googleIcon = document.querySelector('#googlesvg');
  const facebookIcon = document.querySelector('#fbsvg');
  const buttonLogin = document.querySelector('#button-login');
  const signup = document.querySelector('#signup');

  // function for Login Authentication
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    login(emailValue, passwordValue);
  });

  // function for Google Authentication
  googleIcon.addEventListener('click', () => {
    googleAuth();
  });
  // function for FB Authentication
  facebookIcon.addEventListener('click', () => {
    facebookAuth();
  });

  signup.addEventListener('click', () => {
    window.history.replaceState({ route: 'signup' }, 'signup', '/signup');//
    window.dispatchEvent(new Event('popstate'));
  });
};

export const onLoadSignUp = () => {
  // const signupform = document.querySelector('#signupform');
  const email = document.querySelector('#signupemail');
  const password = document.querySelector('#signuppassword');
  const signUpButton = document.querySelector('#signupbutton');

  // function for SignUp
  signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    signUp(emailValue, passwordValue);
    // signupform.reset();
  });
};

export const onLoadNews = () => {
  // Log out
  const profile = document.querySelector('#profile');
  const logOut = document.querySelector('#logout');
  logOut.addEventListener('click', () => {
    logOutPage();
  });
  profile.addEventListener('click', () => {
    console.log('I am Profile');
  });
};
