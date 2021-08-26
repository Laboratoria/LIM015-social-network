import { signUpUser } from '../views-controllers/signup-control.js';

export default () => {
  const sectionSignUp = document.createElement('section');
  const template = `
  <section id="contenedorSignUp" class="contenedorSignUp">
        <section class="side">
        <p class="text-welcome">Registrate</p>
          <img class="ibook-img" src="img/ibook-img.png" width="300px" alt="imagen relacionado a ibook"/>
          <p class="text-text">"Leer es estar soñando con los ojos abiertos"</p>
        </section>

        <!-- Seccion donde esta el formulario de SignUp -->
        <form class="data-container">
          <img class="logo-ibook" src="img/logo-ibook.png" width="200px" alt="logo de iBook"/>
          <section>
          <!-- <p class="welcome-SignUp">Registrate:</p> -->
          </section>
          <section>
            <i class="fas fa-user"></i>
            <input type="text" class="registro" id="nombres" placeholder="Nombres" required>
          </section>

          <section>
            <i class="fas fa-at"></i>
            <input type="email" class="registro" id="email" placeholder="Correo Electronico" required>
          </section>

          <section class="i">
              <i class="fas fa-lock"></i>
              <input type="password" class="registro" id="password1" placeholder="Contraseña" required>
          </section>
          <input type="button" class="registro-signUp" href="#/" id="signUp" value="Registrar">
          <p class="error-message" id="error-message"></p>
          <label class="registrate">¿Ya tienes una cuenta?&nbsp;<a class="btn-register" href="#/" id="registrate">Ingresa.</a></label>
          </form>
  </section>
  `;

  sectionSignUp.innerHTML = template;
  sectionSignUp.setAttribute('class', 'contenedorSign-Up');

  const btnSignUp = sectionSignUp.querySelector('#signUp');
  btnSignUp.addEventListener('click', signUpUser);

  return sectionSignUp;
};
