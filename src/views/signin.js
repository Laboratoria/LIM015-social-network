import { signIn, signInWithGoogle, signInFb } from '../views-controllers/signin-control.js';

export default () => {
  const sectionSignIn = document.createElement('section');
  const template = `
    <section id="contenedorSignIn" class="contenedorSignIn">

      <!-- Seccion donde esta el formulario de SignIn -->
      <form class="data-container">
          <p class="welcome"> ¡Bienvenido!</p>
          <img class="logo-ibook" src="img/logo-ibook.png" width="180px" alt="logo de iBook"/>
          <p class="welcome-description"> ¡Bienvenido a la comunidad que te ayuda a leer resenas de libros!</p>

          <input type="email" class="username" id="username" placeholder=" E-mail" required>
            <input type="password" class="password" id="password1" placeholder=" Password" required>
            <input type="button" class="registro" href="#/home" id="sign-in" value="Sign-In">
            <a href="#">¿Olvidaste tu contraseña?</a>
          <p>Ingresar por</p>

      <!-- Seccion donde estan los botones -->
        <section class="btn-fb-google">
          <a id="btn-fb" href="#"><img class="facebook" src="/src/img/logo-fb.svg"/></a>
          <a id="btn-gg" href="#"><img class="google" src="/src/img/logo-gg.svg"/></a>
        </section>
        <label class="registro">¿No tienes una cuenta?&nbsp;<a class="bold" href="#/signup" id="registrate">Regístrate.</a></label>
      </form>
    </section>
    `;

  // agregar clase para dar css
  sectionSignIn.innerHTML = template;
  sectionSignIn.setAttribute('class', 'contenedorSign-In');

  const btnSignIn = sectionSignIn.querySelector('#sign-in');
  const btnSignGog = sectionSignIn.querySelector('#btn-gg');
  const btnSignFb = sectionSignIn.querySelector('#btn-fb');

  btnSignIn.addEventListener('click', signIn);
  btnSignGog.addEventListener('click', signInWithGoogle);
  btnSignFb.addEventListener('click', signInFb);

  return sectionSignIn;
};
