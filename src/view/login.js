const viewLogin =()=>{

    const htmlLogin=
    `    <div class="loginArea">
    <div class="formContainer">
      <div class= "formContainer-Logo">
      <a href="/#" class="logoLink" title="makipura">
      <img src="https://www.figma.com/file/Wycpr38HvsrNongiQVud7U/Emprendedoras?node-id=15%3A620" alt="Makipura">
      </a>
      </div>
      <div class="formContainer-welcomeSubtitle"> 
        <h2>¡Bienvenida Emprendedora!</h2>
      </div>
      <div class="loginForm-title">
        <h1>INICIA SESIÓN</h1>
      </div>
      <form class="loginForm-login" action="">
        <div class="login-inputList">
          <div class="inputList-item">
            <label type="" for="email" class="">Email</label>
            <input type="text" id="email" value placeholder="Ingrese su correo electrónico">
          </div>
          <div class="inputList-item">
            <label type="" for="password" class="">Contraseña</label>
            <input type="" id="password" value placeholder="Ingrese su contraseña" autocomplete="off">
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

    return divLogin;

}


export  {viewLogin}