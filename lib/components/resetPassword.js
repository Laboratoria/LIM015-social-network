import { sendPasswordReset } from '../firebase/functions.js';
import { redirectTo } from '../router/redirect.js';

const resetPasswordFirebase = (container) => {
  const resetBtn = container.querySelector('#resetPasswordButton');
  resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = container.querySelectorAll('input[required]');
    if (email.value !== '') {
      console.log(email[0].value);
      sendPasswordReset(email[0].value)
        .then(() => {
          console.log('Se envió el correo satisfactoriamente, favor de verificar');
        }).catch((err) => {
          const error = err.code;
          if (error === 'auth/user-not-found') {
            console.log('Email no registrado');
          }
        });
    } else if (email[0].value === '') {
      console.log('No ha escrito ningún correo');
    }
  });
};

export const resetPassword = () => {
  const container = document.createElement('section');
  container.classList.add('resetPasswordContainer');
  const element = document.createElement('section');
  element.classList.add('resetPasswordSection');
  element.innerHTML = `
    <form id="passwordForm" class="resetPasswordForm">
      <img class="desktop-logo" src="./assets/img/logo.svg" alt="petstagram"/>
      <img class="icon icon-lock" src="./assets/img/lock.svg"/>
      <label class="formText formText-bold formText-medium">¿Tienes problemas para iniciar sesión?</label>
      <label class="formText resetText">Ingresa tu correo y te enviaremos un enlace para que recuperes el acceso a tu cuenta</label>
      <label class="formText">El correo ha sido enviado, por favor verifícalo</label>
      <input id="resetEmail" class="formBox" name="emailReset" title="Ejemplo: correo@example.com" type="email" placeholder="correo@example.com" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$" title="Ejemplo: correo@example.com" required/>
      <button id="resetPasswordButton" class="formButton">Recuperar contraseña</button>
      <a id="signUp" class="formText formText-bold">Crear cuenta nueva</a>
      <a id="signIn" class="formText formText-bold">Volver a inicio de sesión</a>
    </form>
  `;
  container.appendChild(element);
  resetPasswordFirebase(container);
  container.querySelector('#signUp').addEventListener('click', () => {
    redirectTo('signup');
  });
  container.querySelector('#signIn').addEventListener('click', () => {
    redirectTo('login');
  });
  return container;
};
