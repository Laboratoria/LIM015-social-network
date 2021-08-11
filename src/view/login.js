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
  const provider = new firebase.auth.GoogleAuthProvider();
  const inicioSesionGoogle = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then(() => {
        console.log('logueado');
        window.location.hash = '#/Home';
        messageError.innerHTML = '';
      })
      .catch(() => {
        console.log('error');
        messageError.innerHTML = 'Error de logueo';
      });
  };
  const btnGoogle = sectionLogIn.querySelector('#btnGoogle');
  btnGoogle.addEventListener('click', inicioSesionGoogle, false);
  return sectionLogIn;
};
