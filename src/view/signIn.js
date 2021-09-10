import { signInUser, registerGoogle } from '../firebase/firebase-functions.js';

export const signIn = () => {
  const viewSignIn = `
    <div class="home-container">
      <figure class="container-img">
        <img class="cat-gif" src='https://i.pinimg.com/originals/35/ce/9f/35ce9f85da291b4c1c504d8cbd37e8ee.gif'>
      </figure>
      <form id="signin-form" class="signin-form">
        <div class="form-div">
          <input class="input" type="email" placeholder="Correo electrónico" id="signin-email" required><br>
          <span class="error-email"></span>
          </div>
        <div class="form-div">
          <input class="input" type="password" placeholder="Contraseña" id="signin-password"><br>
          <span class="error-password"></span>
        </div>
        <div class="form-div">
          <button type="submit" id="start-button" class="start-button">Iniciar</button>
        </div>
      </form>
      <ul class="home-list">
        <li class="signin-access-items">
         <button class="google-button"> <a id="signin-google" href="#/google" class="sgn">Acceder con Google</a></button>
        </li>
        <li class="signin-access-items">
          <span>¿No tienes cuenta?</span><a class="sgn" href="#/signup">Create una</a>
        </li>
      </ul>
    </div>`;

  const sectionElement = document.createElement('div');
  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = viewSignIn;

  const signinBtm = sectionElement.querySelector('#start-button');
  signinBtm.addEventListener('click', (e) => {
    e.preventDefault();
    const signInEmail = sectionElement.querySelector('#signin-email').value;
    const signInPassword = sectionElement.querySelector('#signin-password').value;
    const errorEmail = sectionElement.querySelector('.error-email');
    const errorPassword = sectionElement.querySelector('.error-password');

    errorEmail.innerHTML = '';
    errorPassword.innerHTML = '';
    if (signInPassword === '' && signInEmail === '') {
      errorPassword.innerHTML = 'Inserte contraseña';
      errorEmail.innerHTML = 'Inserte email';
    } else if (signInPassword === '') {
      errorPassword.innerHTML = 'Inserte contraseña';
    } else if (signInEmail === '') {
      errorEmail.innerHTML = 'Inserte email';
    } else {
      signInUser(signInEmail, signInPassword)
        .then(() => {
          window.location.hash = '#/onlycats';
          // console.log('inscrito');
        })
        .catch((error) => {
          const errorCode = error.code;
          /* const errorMessage = error.message; */
          if (errorCode === 'auth/user-not-found') {
            errorEmail.innerHTML = 'El usuario no existe';
          } else if (errorCode === 'auth/wrong-password') {
            errorPassword.innerHTML = 'La contraseña es inválida o el usuario no tiene contraseña';
          }
          // const errorMessage = error.message;
          // console.log(errorCode, errorMessage);
        });
    }
  });
  const signInGoogle = sectionElement.querySelector('#signin-google');
  signInGoogle.addEventListener('click', (e) => {
    e.preventDefault();

    registerGoogle()
      .then(() => {
        window.location.hash = '#/onlycats';
        // console.log('You\'re now signed in !');
      })
      // eslint-disable-next-line arrow-body-style
      .catch((error) => {
        // console.error(error);
        return error;
      });
  });
  return sectionElement;
};
