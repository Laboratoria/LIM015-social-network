import { addUser, sendEmail } from '../firebase/functions.js';
import { formValidation, showAndHidePassword } from './validation.js';
import { emailAlreadyExistsModal, succesfulSignUpModal } from './modal.js';

const redirectToLogin = (container, id) => {
  /* Location login */
  container.querySelector(id).addEventListener('click', () => {
    window.location.hash = '/login';
  });
};

const resendEmail = (container, user) => {
  container.querySelector('#resendEmail').addEventListener('click', () => {
    sendEmail(user);
  });
};

const signUpWithFirebase = (nameInput, emailInput, passwordInput, container) => {
  const signUpForm = container.querySelector('#signUp');
  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // registro correcto
    addUser(emailInput.value, passwordInput.value)
      .then((userCredential) => {
        const user = userCredential.user;
        user.updateProfile({
          displayName: nameInput.value,
        });
        sendEmail(user)
          .then(() => {
            container.appendChild(succesfulSignUpModal(emailInput.value));
            resendEmail(container, user);
            // window.location.hash = '/home';
          });
        // console.log(user);
      })
      .catch((error) => {
        if (error.message) {
          container.appendChild(emailAlreadyExistsModal(emailInput.value));
          redirectToLogin(container, '#loginRedirectModal');
        }
        console.log(error.message);
      });
  });
};

export const signUp = () => {
  const container = document.createElement('section');
  container.classList.add('signUpContainer');
  const element = document.createElement('section');
  element.classList.add('signUpSection');
  element.innerHTML = `
    <form id="signUp"  class="signUpForm">
      <img class="mobil-logo" src="./assets/img/logo-mobile.svg" alt="petstagram"/>
      <img class="desktop-logo" src="./assets/img/logo.svg" alt="petstagram" display="none"/>
      <input id="signUpUserName" class="formBox" name="user" type="text" placeholder="nombre de usuario" pattern="^([a-zA-Z0-9-_\\.]+)$" title="Solo puede contener letras, puntos y guiones." required/>
      <input id="signUpEmail" class="formBox" name="email" type="email" placeholder="correo@example.com" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$" title="Ejemplo: correo@example.com" required/>
      <label class="passwordContainer">
        <input id="signUpPassword" class="formBox" name="password" type="password" placeholder="contraseña" pattern="^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$" title="La contraseña debe tener al menos entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos." required/>
        <i class="icon icon-gray icon-eye ai-eye-closed" id="togglePassword"></i>
      </label>
      <div class="checkbox">
        <label class="container-checkBox"><input type="checkbox" required/><span class="checkmark"></span></label>
        <label class="formText">Acepto términos y condiciones</label>
      </div>
      <button id="signUpButton" class="formButton">Registrarte</button>
      <label class="formText question">¿Ya tienes una cuenta?<span id="loginRedirect"><b>Inicia sesión</b></span></label>
    </form>
  `;
  container.appendChild(element);
  const [nameInput, emailInput, passwordInput] = container.querySelectorAll('input[required]');
  showAndHidePassword(container, passwordInput);
  signUpWithFirebase(nameInput, emailInput, passwordInput, container);
  redirectToLogin(container, '#loginRedirect');
  formValidation(element);
  return container;
};
