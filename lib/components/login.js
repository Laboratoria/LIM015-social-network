import { loginUser, googleLogin } from '../firebase/functions.js';
import { formValidation } from './validation.js';

export const showAndHidePassword = (container, passwordInput) => {
  /* Hide and show password */
  const togglePassword = container.querySelector('#togglePassword');
  togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.classList.toggle('ai-eye-open');
  });
};

const redirectToSignUp = (container) => {
  /* Location SignUp */
  const signUp = container.querySelector('#signUp');
  signUp.addEventListener('click', () => {
    window.location.hash = '/signup';
  });
};

const loginWithFirebase = (container) => {
  /* Login */
  const loginForm = container.querySelector('#login');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = container.querySelectorAll('input[required]');
    loginUser(inputs[0].value, inputs[1].value)
      .then((userCredential) => {
        const user = userCredential.user;
        // aquí va el mensaje cuando se loguea correctamente
        console.log(user);
        window.location.hash = '/home';
      }).catch((error) => {
        console.log(error.message);
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
      <a href="" id="loginReset" class="formText">Olvidé la contraseña</a>
      <button id="signInButton" class="formButton">Iniciar Sesión</button>
      <label class="formText"> O ingresa con...</label>
      <label class="formText">
        <i class="icon ai-facebook-fill"></i>
        <a href=""><i class="icon ai-google-contained-fill google"></i></a>
      </label>
      <label class="formText">¿No tienes una cuenta?<span id="signUp"><b>Crear una cuenta</b></span></label>
    </form>
  `;
  container.appendChild(element);
  const passwordInput = container.querySelector('#loginPassword');
  showAndHidePassword(container, passwordInput);
  redirectToSignUp(container);
  loginWithFirebase(container);
  formValidation(element);
  const googleBtn = container.querySelector('.google');
  googleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    googleLogin()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location.hash = '/home';
      });
  });
  return container;
};
