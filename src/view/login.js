export const logInTemplate = () => {
  const sectionLogIn = document.createElement('div');
  sectionLogIn.classList.add('iOne');
  const templateLogIn = `
    <div class="divCabecera">
      <img src="./img/logoTuristik.png" class="imgLogo" alt="logoTuristik">
      <h1>Bienvenidas</h1>
    </div>
    <form id="logInForm">
      <input id="emailLogIn" type="email" placeholder="Enter Email" class="inputForm" required>
      <input id="passwordLogIn" type="password" placeholder="Enter Password" class="inputForm" required>
      <button type="button" class="btnLogIn">Log In</button><br>
    </form>
    <span>New here? <a id="linkRegister" href="#/Register">Register</a></span>
    <div class="divIconG">
      <button id = 'btnGoogle'>
        <img src="./img/icons8-logo-de-google.svg" alt="iGoogle" class="iGoogle">
      </button>
      <div id = 'error-logueo'></div>
    </div>
    `;
  sectionLogIn.innerHTML = templateLogIn;

  const messageError = sectionLogIn.querySelector('#error-logueo');

  const inicioSesionGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        // console.log('user' , user);
        // console.log('logueado');
        window.location.hash = '#/Home';
        messageError.innerHTML = '';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        // console.log('error' , errorMessage)
        // console.log('error');
        messageError.innerHTML = 'Error de logueo';
        window.location.hash = '#/Error404';
      });
  };
  const btnGoogle = sectionLogIn.querySelector('#btnGoogle');
  btnGoogle.addEventListener('click', inicioSesionGoogle, false);
  return sectionLogIn;
};
