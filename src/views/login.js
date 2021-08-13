export const LOGIN = () => {
  const view = `
  <section class='contenedorFormulario'>
    <form >
      <img src='images/laRuta-02.png' alt='La ruta logo' class='logo'/>
      <p class='welcome'>Bienvenid@ viajer@!</p>
      <span id='errorMessage' class='errorMessage'></span>
      <input type='email' id='email' placeholder='✉ Correo electrónico' class='input' />
      <input type='password' id='password1' placeholder='🔑 Contraseña' class='input' minlength='6'/>
      <div class='buttons'>
        <button id='login' type='submit' class='btnStart'>Iniciar Sesión</button>
      </div>
      <div  class='buttons'>
        <button id='signUp' type='button'class='btnStart'>Registrarse</button>
      </div>
      <p>O ingresa con...</p>
      <div class='imgFacebookGoogle'>
        <button id='btnFacebook' type='button'><img id='facebook' src='images/facebook.png' alt='Facebook' class='iconSocial'></button>
        <button id='btnGoogle' type='button'><img id='google' src='images/google.png' alt='Google' class='iconSocial'></button>
      </div>
    </form>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  // Constantes Globales
  const btnLogin = divElement.querySelector('#login');
  const btnSignUp = divElement.querySelector('#signUp');
  const btnFacebook = divElement.querySelector('#btnFacebook');
  const btnGoogle = divElement.querySelector('#btnGoogle');
  // INPUTS GENERALES
  const errorMessage = divElement.querySelector('#errorMessage');
  const emailUser = divElement.querySelector('#email');
  const password = divElement.querySelector('#password1');

  // ------------------------- Boton Inicio sesion -------------------------
  btnLogin.addEventListener('click', () => {
    if (emailUser.value === '' && password.value === '') {
      errorMessage.textContent = 'Ups 🙈, ingresa un correo y una contraseña!';
    } else if (emailUser.value !== '' && password.value === '') {
      errorMessage.textContent = 'Ups 🙉, ingresa una contraseña';
    } else if (emailUser.value === '' && password.value !== '') {
      errorMessage.textContent = 'Ups 🙉, ingresa un correo correcto -> e.g. a@gmail.com';
    } else {
      /* OJO-CASO PASA EXITOSAMENTE */
      errorMessage.textContent = '';
      /* OJO-AQUI DEBE CAMBIARSE EL HASH SOLO SI EL CORREO
      Y CONTRASENA SON CORRECTOS CON FIREBASE */
      window.location.hash = '#/timeLine';
    }
  });

  // ------------------------- Boton Registrarse -LISTO!!!! -------------------------
  btnSignUp.addEventListener('click', () => {
    window.location.hash = '#/signUp';
  });

  // ------------------------- Boton Facebook - inicio de sesion -------------------------
  btnFacebook.addEventListener('click', () => {
    console.log('Ingresaras con Facebook ?');
  });

  // ------------------------- Boton Google - inicio de sesion -------------------------
  btnGoogle.addEventListener('click', () => {
    console.log('Ingresaras con Google ?');
  });

  // termina
  return divElement;
};
