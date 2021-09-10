import { loginEmail, loginGoogle } from '../firebase/fb-functions.js'

const viewLogin = () => {
  const htmlLogin =
    `
  <div class="viewDesktop">
    <img class="viewDesktop__logo" src="./img/logoMobilPrueba.jpg" alt="Makipura">
    <img class="viewDesktop__woman" src="./img/woman.png" alt="Makipura">
  </div>
  <div class="login">
    <div class="logo">
      <img class="logo__img" src="./img/logoMobilPrueba.jpg" alt="Makipura" width="150">
    </div>
    <div class="login__Subtitle">
      <h2 class="login__h2">¡Bienvenida Emprendedora!</h2>
    </div>
    <div class="login__title">
      <h1 class="login__h1">INICIA SESIÓN</h1>
    </div>
    <form class="form form--login" id="loginForm-login" action="">
      <div class="form--login__inputList">
        <div class="form--login__item">
          <label type="" for="emailLogin" class="form--login__label">Email</label>
          <input type="text" class="form__input" id="emailLogin" value placeholder="Ingrese su correo electrónico">

        </div>
        <div class="form--login__item">
          <label type="" for="passwordLogin" class="form--login__label">Contraseña</label>
          <input type="password" class="form__input" id="passwordLogin" value placeholder="Ingrese su contraseña"
            autocomplete="off">
        </div>
      </div>
      <div class="form--login__button">
        <button class="button button--main" type="submit">Ingresar</button>
      </div>
      <div class="form--separator form--login__separator">ó</div>
      <div class="form--login__social">
        <button id="buttonGoogleLogin" class="button button--second" type="submit"> 
          <div class="buttton button--second__img"><img class="googleIcon" src="./img/iconoGoogle.png" alt="icono_Google"></div>
          <div class="buttton button--second__text">Ingresar con Google</div> 
        </button>
      </div>
    </form>
    <div class="login__registerLink">
      <p>No tienes cuenta</br>Registrate<a class="link" href="#/register"> aquí</a></p>
    </div>
  </div>
    `;

  const sectionLogin = document.createElement('section')
  sectionLogin.classList.add("loginSection");
  sectionLogin.innerHTML = htmlLogin;

  const loginForm = sectionLogin.querySelector('#loginForm-login');
  const emailLogin = sectionLogin.querySelector('#emailLogin').value;
  const passwordLogin = sectionLogin.querySelector('#passwordLogin').value;

 


  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    console.log(emailLogin, passwordLogin);
  // // SignIn With Email and Password Function 
    loginEmail(emailLogin, passwordLogin)
    .then(userCredential => {
      //clear form
      loginForm.reset();
      // changeLogin();
      console.log('ya estas dentro');
      window.open('#/home', '_self')
    });
  });

  const buttonGoogleLogin = sectionLogin.querySelector('#buttonGoogleLogin');
  buttonGoogleLogin.addEventListener('click', () => {
    loginGoogle().then(result => {
        console.log('signin with google');
        window.open('#/home', '_self')
      })
      .catch(error => {
        console.log(error)
      })
    console.log('click google')
  });

  return sectionLogin;
}

export { viewLogin }