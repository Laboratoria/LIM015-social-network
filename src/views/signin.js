import { signIn, signInWithGoogle, signInFb } from '../views-controllers/signin-control.js';

export default () => {
  const sectionSignIn = document.createElement('section');
  const template = `
    <section id="contenedorSignIn" class="contenedorSignIn">
    <section class="side">
      <p class="text-welcome">BIENVENIDOS</p>
      <img class="ibook-img" src="img/ibook-img.png" width="300px" alt="imagen relacionado a ibook"/>
      <p class="text-text">"Si quieres aventura, lanzate a la lectura"</p>
    </section>
      <!-- Seccion donde esta el formulario de SignIn -->
      <form class="data-container">
          <img class="logo-ibook" src="img/logo-ibook.png" width="200px" alt="logo de iBook"/>
          <input type="email" class="registro" id="username" placeholder=" E-mail" required>
            <input type="password" class="registro" id="password1" placeholder=" Password" required>
            <input type="button" class="registro-signin" href="#/home" id="sign-in" value="Sign-In">
            <p class="error" id="error"></p>
            <a href="#" class="btn-forget">¿Olvidaste tu contraseña?</a>
          <p class="text-login">Ingresar por</p>
      <!-- Seccion donde estan los botones -->
        <section class="btn-fb-google">
          <button id="btn-fb" class="button"><i class="fab fa-facebook"></i></button>
          <button id="btn-gg" class="button"><i class="fab fa-google"></i></button>
        </section>
        <label class="registrate">¿No tienes una cuenta?&nbsp;<a class="btn-register" href="#/signup" id="registrate">Regístrate.</a></label>
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
