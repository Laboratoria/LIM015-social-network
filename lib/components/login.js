import {
  loginUser, googleLogin, onAuthStateChanged, sendEmail,
} from '../firebase/functions.js';
import { redirectTo } from '../router/redirect.js';
import { formValidation, showAndHidePassword } from './validation.js';
import { userNotRegisterModal, wrongPasswordModal, verifiedEmailModal } from './modal.js';

/* Location SignUp */
const redirectToSignUp = (container, id) => {
  const signUpRedirect = container.querySelector(id);
  signUpRedirect.addEventListener('click', () => {
    redirectTo('signup');
  });
};

const validateIfEmailVerified = (container) => {
  onAuthStateChanged((user) => {
    if (user) {
      const emailVerified = user.emailVerified;
      const email = user.email;
      if (!emailVerified) {
        // mensaje cuando el email no está validado
        container.appendChild(verifiedEmailModal(email));
        container.querySelector('#resendEmail').addEventListener('click', () => {
          sendEmail();
        });
      } else { // email validado
        redirectTo('home');
      }
    }
  });
};

const redirectToResetPassword = (container) => {
  /* Locaword */
  const reset = container.querySelector('#loginReset');
  reset.addEventListener('click', () => {
    redirectTo('resetpassword');
  });
};

/* Login */

const loginWithFirebase = (container) => {
  const loginForm = container.querySelector('#login');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = container.querySelectorAll('input[required]');
    loginUser(inputs[0].value, inputs[1].value)
      .then(() => validateIfEmailVerified(container))
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          // mensaje cuando no existe un usuario registrado
          container.appendChild(userNotRegisterModal(inputs[0].value));
          redirectToSignUp(container, '#signUpRedirectModal');
          // console.log(error.message);
        } else if (error.code === 'auth/wrong-password') {
          // mensaje cuando la contraseña es incorrecta
          container.appendChild(wrongPasswordModal());
          // console.log(error.message);
        }
      });
  });
};

const redirectGoogle = (container) => {
  const googleBtn = container.querySelector('.google');
  googleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    googleLogin()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        redirectTo('home');
      });
  });
};

export const login = () => {
  const container = document.createElement('section');
  container.classList.add('loginContainer');
  const element = document.createElement('section');
  element.classList.add('loginSection');
  element.innerHTML = `
    <form id="login" class="loginForm">
      <img class="mobil-logo" src="./assets/img/logo-mobile.svg" alt="petstagram"/>
      <img class="desktop-logo" src="./assets/img/logo.svg" alt="petstagram" display="none"/>
      <input id="loginEmail" class="formBox" name="email" type="email" placeholder="correo@example.com" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$" title="Ejemplo: correo@example.com" required/>
      <label class="passwordContainer">
        <input id="loginPassword" class="formBox" name="password" type="password" placeholder="contraseña" pattern="^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$" title="La contraseña debe tener al menos entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos." required/>
        <i class="icon icon-gray icon-eye ai-eye-closed" id="togglePassword"></i>
      </label>
      <a id="loginReset" class="formText">Olvidé la contraseña</a>
      <button id="signInButton" class="formButton">Iniciar Sesión</button>
      <label class="formText"> O ingresa con...</label>
      <label class="formText">
        <i class="icon ai-facebook-fill"></i>
         <a href=""><i class="icon ai-google-contained-fill google"></i></a>
      </label>
      <label class="formText">¿No tienes una cuenta?<a><span id="signUpRedirect"><b>Crear una cuenta</b></span></a></label>
    </form>
  `;
  container.appendChild(element);
  const passwordInput = container.querySelector('#loginPassword');
  showAndHidePassword(container, passwordInput);
  redirectToResetPassword(container);
  redirectToSignUp(container, '#signUpRedirect');
  loginWithFirebase(container);
  redirectGoogle(container);
  formValidation(element);
  return container;
};
