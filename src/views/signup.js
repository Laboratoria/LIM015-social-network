import { signUpUser } from '../views-controllers/signup-control.js';

export default () => {
  const sectionSignUp = document.createElement('section');
  const template = `
  <section id="contenedorSignUp" class="contenedorSignUp">

    <p class="welcome-SignUp"> ¡Registrate!</p>
    <img class="logo-ibook-png" src="img/logo-ibook.png" width="180px" alt="logo de iBook"/>
    <input type="text" class="registro" id="nombres" placeholder=" Ingresar Nombres" required>
    <input type="text" class="registro" id="apellidos" placeholder=" Ingresar Apellidos" required>
    <input type="email" class="registro" id="email" placeholder=" Ingresar Correo Electronico" required>
    <input type="password" class="registro" id="password" placeholder=" Ingresar Contraseña" required>
    <input type="submit" href="#/" class="registro" id="signUp" value="Registrar">
    <p class="error" id="error"></p>
  </section>
  `;

  sectionSignUp.innerHTML = template;
  sectionSignUp.setAttribute('class', 'contenedorSign-Up');

  const btnSignUp = sectionSignUp.querySelector('#signUp');
  btnSignUp.addEventListener('click', signUpUser);

  return sectionSignUp;
};
