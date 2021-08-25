import { addUser } from '../firebase/functions.js';

export const signUp = () => {
  const container = document.createElement('section');
  container.classList.add('signUpContainer');
  const element = document.createElement('section');
  element.innerHTML = `
    <form id="signUp"  class="signUp-form">
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
      <button id="signUpButton">Registrarte</button>
      <label class="formText question">¿Ya tienes una cuenta?<span id="signIn"><b>Inicia sesión</b></span></label>
    </form>
  `;
  container.appendChild(element);
  // Show and Hide password
  const togglePassword = container.querySelector('#togglePassword');
  const password = container.querySelector('#signUpPassword');
  togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.classList.toggle('ai-eye-open');
  });
  // signUp button
  const signUpButton = container.querySelector('#signUpButton');
  signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    // registro correcto
    const inputs = container.querySelectorAll('input[required]');
    addUser(inputs[1].value, inputs[2].value)
      .then((userCredential) => {
        const user = userCredential.user;
        user.updateProfile({
          displayName: inputs[0].value,
        });
        user.sendEmailVerification()
          .then(() => {
            console.log('correo enviado');
          });
        console.log(user);
        window.location.hash = '/login';
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
  return container;
};
