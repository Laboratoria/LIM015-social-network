import { auth } from '../firebase/fb-config.js'

const viewLogin =()=>{

    const htmlLogin=
    ` 
  <section class="login">
    <div class="login__formContainer">

      <div class= "login__logo">
        <img class="login__img"  src="./img/logoMobilPrueba.jpg" alt="Makipura" width="150>
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
            <input type="text" class="form--login__email"  id="emailLogin" value placeholder="Ingrese su correo electrónico">
          </div>
          <div class="form--login__item">
            <label type="" for="passwordLogin" class="form--login__label">Contraseña</label>
            <input type="password"  class="form--login__password" id="passwordLogin" value placeholder="Ingrese su contraseña" autocomplete="off">
          </div>
        </div>

        <div class="form--login__button">
          <button class="button button--main" type="submit">Ingresar</button>
        </div>

        <div class="form--login__separator">ó</div>

        <div class="form--login__social">
        <button class="button button--second"type="submit">Ingresar con Google</button>
        </div>
      </form>

      <div class="login__registerLink">
      No tienes cuenta</br>Registrate <a class="link" href="#/register">aquí</a> 
      </div>
    </div>
  </section >`;
    
    
    const divLogin=document.createElement('div');
    divLogin.innerHTML=htmlLogin;

    const loginForm = divLogin.querySelector('#loginForm-login');

    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailLogin = document.querySelector('#emailLogin').value;
      const passwordLogin = document.querySelector('#passwordLogin').value;
      console.log(emailLogin, passwordLogin);
      auth.signInWithEmailAndPassword(emailLogin, passwordLogin)
      .then(userCredential => {
        //clear form
        loginForm.reset();
        // changeLogin();
        console.log('ya estas dentro');
        window.open('#/home','_self')
      })
    });
     


    return divLogin;
}


export  {viewLogin}