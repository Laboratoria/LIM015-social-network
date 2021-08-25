import { loginUser } from '../firebase/functions.js';

export const login = () => {
  const container = document.createElement('section');
  const element = document.createElement('section');
  element.innerHTML = `
    <form id="login">
      <img src="./assets/img/logo-mobile.svg" alt="petstagram"/>
      <input id="loginEmail" class="formBox" name="email" type="email" placeholder="correo@example.com" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$" title="Ejemplo: correo@example.com" required/>
      <input id="loginPassword" class="formBox" name="password" type="password" placeholder="contraseña" pattern="^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$" title="La contraseña debe tener al menos entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos." required/>
      <i class="icon icon-gray ai-eye-closed" id="togglePassword"></i>
      <label id="loginReset" class="formText">Olvidé la contraseña</label>
      <button id="signInButton">Iniciar Sesión</button>
      <label class="formText"> O ingresa con...</label>
      <i class="icon ai-facebook-fill"></i>
      <i class="icon ai-google-contained-fill"></i>
      <label class="formText">¿No tienes una cuenta?<span id="signUp"><b>Crear una cuenta</b></span></label>
    </form>
  `;
  container.appendChild(element);
  const togglePassword = container.querySelector('#togglePassword');
  const password = container.querySelector('#loginPassword');
  togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.classList.toggle('ai-eye-open');
  });
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
  return container;
};
