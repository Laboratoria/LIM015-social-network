import {
  signUp, signIn, googleLogin, logout,
} from './fs-login.js';

// SECCION LOGIN HTML
const main = document.querySelector('.container');

// Crear el elemento
const formularios = document.createElement('article');
formularios.className = 'forms-container';
formularios.innerHTML = `
      <section class="signin-signup">
      <!--Formulario sign in-->
        <form action="" class="sign-in-form">
          <h1>Tomodachi</h1>
          <h2 class="title">Ingresa</h2>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" id="signin-email" placeholder="Email"/> 
          </div>
          <div> <p id="si-error-email"></p> </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="signin-password" placeholder="Contraseña">
          </div>
          <div> <p id="si-error-password"></p> </div>
          <input type="submit" value="Ingresar" class="btn solid">
          <p class="social-text">O ingresa con:</p>
          <div class="social-media">
            <a href="#" id="googleLogin" class="social-icon google">
              <i class="fab fa-google"></i>
            </a>
          </div>
        </form>
        <!--Formulario sign up-->
        <form action="" class="sign-up-form">
          <h1>Tomodachi</h1>
          <h2 class="title">Regístrate</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" id="signup-user" placeholder="Usuario">
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" id="signup-email" placeholder="Email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="signup-password" placeholder="Contraseña">
          </div>
          <div> <p id="su-error-password"></p> </div>
          <input type="submit" value="Registrar" class="btn solid">
        </form>
      </section>
    </article>

    <article class="panels-container">
      <section class="panel left-panel">
        <div class="content">
          <h3>¿Eres nuevo?</h3>
          <p>
       ¡únete a nosotros, comparte y diviértete!
          </p>
          <button class="btn transparent" id="registrar">Regístrate</button>
        </div>
        <img src="images/log.png" class="image knj" alt=""/>
      </section>

      <section class="panel right-panel">
        <div class="content">
          <h3>¿Eres parte de la comunidad?</h3>
          <p>
            ¡Logueate y no esperes más!
          </p>
          <button class="btn transparent" id="ingresar">Ingresar</button>
        </div>
        <img src="images/bnh.png" class="image bnh" alt="" />
      </section>
`;

main.appendChild(formularios);

// FUNCIÓN DE LA BOLA
const ingresar = document.getElementById('ingresar');
const registrar = document.getElementById('registrar');
const container = document.querySelector('.container');

registrar.addEventListener('click', () => {
// console.log('registrar');
  container.classList.add('modoRegistro');
});

ingresar.addEventListener('click', () => {
  container.classList.remove('modoRegistro');
});

// Registrarse con email y password
const signupForm = document.querySelector('.sign-up-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signupEmail = document.getElementById('signup-email').value;
  const signupPassword = document.getElementById('signup-password').value;
  const errorMsgPassword = document.getElementById('su-error-password');

  signUp(signupEmail, signupPassword);
  if (signupEmail === '' || signupPassword === '') {
    errorMsgPassword.innerHTML = 'Debes llenar todos los campos <br> (╯ರ ~ ರ)╯︵ ┻━┻';
  }
});

// Ingresar con email y password
const signinForm = document.querySelector('.sign-in-form');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const siginEmail = document.getElementById('signin-email').value; // INPUTS
  const signinPassword = document.getElementById('signin-password').value;
  // const errorMsgEmail = document.getElementById('si-error-email'); // MENSAJES DE ERROR
  const errorMsgPassword = document.getElementById('si-error-password'); // "signIn Error Password"

  signIn(siginEmail, signinPassword);
  if (siginEmail === '' || signinPassword === '') {
    errorMsgPassword.innerHTML = 'Debes ingresar tu email y contraseña <br> (╯ರ ~ ರ)╯︵ ┻━┻';
  }
});

// Ingresar con Google
const googleBtn = document.querySelector('.google');
googleBtn.addEventListener('click', () => {
  googleLogin();
});

// Logout
const Logout = document.querySelector('.fa-sign-out-alt');
Logout.addEventListener('click', () => {
  logout();
});
