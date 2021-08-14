import { registerWithFirebase } from '../firebase/firebase-auth.js';
// Constante a exportar
export const SIGNUP = () => {
  const view = `
  <section class='contenedorRegister'>
    <form id='form'>
    <img src='images/laRuta-02.png' alt='La ruta logo' class='logo'/>
    <p class='welcome'>Bienvenid@ viajer@!</p>
    <span id='errorMessage' class='errorMessage'></span>
    <input type='text' id='userName' placeholder='  Nombre' class='input' required />
    <input type='email' id='email' placeholder='  Correo Electrónico' class='input' required />
    <input type='password' id='password1' placeholder='  Constraseña' class='input' minlength='6' required />
    <input type='password' id='password2' placeholder='  Confirmar Constraseña' class='input' minlength='6' required />
    <div class='buttons'>
      <button type='submit' class='btnStart' id='signUp'>Registrarse</button>
    </div>
    </form>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  // CONSTANTES GLOBALES
  const btnSignUp = divElement.querySelector('#signUp');
  // INPUTS GENERALES
  const formElement = divElement.querySelector('#form');
  const errorMessageElement = divElement.querySelector('#errorMessage');
  const userNameInput = divElement.querySelector('#userName');
  const emailUser = divElement.querySelector('#email');
  const password = divElement.querySelector('#password1');
  const confirmPass = divElement.querySelector('#password2');
  // ------------------------- Boton Registrarse -------------------------
  btnSignUp.addEventListener('click', () => {
    if (password.value !== confirmPass.value) {
      errorMessageElement.textContent = 'Por favor, confirma tu contraseña 🙊';
    } else if (
      userNameInput.value === '' && emailUser.value === '' && password.value === '' && confirmPass.value === ''
    ) {
      errorMessageElement.textContent = '⚡ Por favor complete todos los campos ⚡';
    } else {
      /* AQUI TODO PASA OK */
      errorMessageElement.textContent = '';
      /* AQUI CODIGO DE FIREBASE */
      formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        registerWithFirebase(emailUser.value, password.value, errorMessageElement);
      });
    }
  });
  // TERMINA AQUI
  return divElement;
};
