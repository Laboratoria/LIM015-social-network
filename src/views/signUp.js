export const SIGNUP = () => {
  const view = `
  <section class='contenedorRegister'>
    <form>
    <img src='images/laRuta-02.png' alt='La ruta logo' class='logo'/>
    <p class='welcome'>Bienvenid@ viajer@!</p>
    <span id='errorMessage'></span>
    <input type='text' id='userName' placeholder='👤 Nombre' class='input' required />
    <input type='email' id='email' placeholder='✉ Correo Electrónico' class='input' required />
    <input type='password' id='password1' placeholder='🔑 Constraseña' class='input' minlength='6' required />
    <input type='password' id='password2' placeholder='🔑 Confirmar Constraseña' class='input' minlength='6' required />
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
  const errorMessage = divElement.querySelector('#errorMessage');
  const userNameInput = divElement.querySelector('#userName');
  const emailUser = divElement.querySelector('#email');
  const password = divElement.querySelector('#password1');
  const confirmPass = divElement.querySelector('#password2');
  // ------------------------- Boton Registrarse -------------------------
  btnSignUp.addEventListener('click', () => {
    if (password.value !== confirmPass.value) {
      errorMessage.textContent = 'Por favor, confirma tu contraseña 🙊';
    } else if (
      userNameInput.value === '' && emailUser.value === '' && password.value === '' && confirmPass.value === ''
    ) {
      errorMessage.textContent = '⚡ Por favor complete todos los campos ⚡';
    } else {
      /* AQUI TODO PASA OK */
      console.log('PASO TODO OK');
      errorMessage.textContent = '';
      /* AQUI CODIGO DE FIREBASE */
      window.location.hash = '#/login';
    }
  });
  // TERMINA AQUI
  return divElement;
};
