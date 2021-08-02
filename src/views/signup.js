import { signUpUser } from '../views-controllers/signup-control.js';

export default () => {
  const sectionSignUp = document.createElement('section');
  const template = `
  <section id="contenedorSignUp" class="contenedorSignUp">
  <section class="side">
      <img class="ibook-img" src="img/ibook-img.png" width="300px" alt="imagen relacionado a ibook"/>
      <p>"Leer es estar soñando con los ojos abiertos"</p>
    </section>
    <form class="data-container">
    <img class="logo-ibook-png" src="img/logo-ibook.png" width="200px" alt="logo de iBook"/>
    <p class="welcome-SignUp">Registrate:</p>
    <input type="text" class="registro" id="nombres" placeholder=" Nombres" required>
    <input type="email" class="registro" id="email" placeholder=" Correo Electronico" required>
    <input type="password" class="registro" id="password" placeholder=" Contraseña" required>
    <input type="submit" href="#/" class="registro-signUp" id="signUp" value="Registrar">
    <p class="error" id="error1"></p>
    <label class="welcome-SignUp">¿Ya tienes una cuenta?&nbsp;<a class="bold" href="#/" id="Ingresa">Ingresa.</a></label>
    </form>
  </section>
  `;

  sectionSignUp.innerHTML = template;
  sectionSignUp.setAttribute('class', 'contenedorSign-Up');

  const btnSignUp = sectionSignUp.querySelector('#signUp');
  btnSignUp.addEventListener('click', signUpUser);

  return sectionSignUp;
};
