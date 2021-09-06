import { auth } from '../firebase/fb-config.js'

const viewLogin =()=>{

    const htmlLogin=
    `    <div class="loginArea">
    <div class="formContainer">
      <div class= "formContainer-Logo">
      <!--<a href="/#" class="logoLink" title="makipura">-->
      <img src="../img/woman.png" alt="Makipura">
      </a>
      </div>
      <div class="formContainer-welcomeSubtitle"> 
        <h2>¡Bienvenida Emprendedora!</h2>
      </div>
      <div class="loginForm-title">
        <h1>INICIA SESIÓN</h1>
      </div>
      <form class="loginForm-login" id="loginForm-login" action="">
        <div class="login-inputList">
          <div class="inputList-item">
            <label type="" for="emailLogin" class="">Email</label>
            <input type="text" id="emailLogin" value placeholder="Ingrese su correo electrónico">
          </div>
          <div class="inputList-item">
            <label type="" for="passwordLogin" class="">Contraseña</label>
            <input type="password" id="passwordLogin" value placeholder="Ingrese su contraseña" autocomplete="off">
          </div>
        </div>
        <div class="login-button">
           <button class="mainButton"type="submit">Ingresar</button>
        </div>
        <div class="login-separator">ó</div>
        <div class="login-social">
           <button class="secondButton"type="submit">Ingresar con Google</button>
        </div>
      </form>
      <div class="loginForm-registrationLink">
      No tienes cuenta</br>Registrate <a href="#/register">aquí</a> 
      </div>
    </div>
  </div>`;
    
    
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