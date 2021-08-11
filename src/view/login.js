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
      <img src="./img/icons8-logo-de-google.svg" alt="iGoogle" class="iGoogle">
    </div>
    `;
  sectionLogIn.innerHTML = templateLogIn;

  const btnLogIn = sectionLogIn.querySelector('.btnLogIn');

  function logIn() {
    console.log('Si funciona');
    const userEmail = sectionLogIn.querySelector('#emailLogIn').value;
    const userPassword = sectionLogIn.querySelector('#passwordLogIn').value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert('Error: ' + errorMessage);
    });
  }
  btnLogIn.addEventListener('click', logIn);
  return sectionLogIn;
};

// Metodo de autoentificacion
// La condicion autoentificacion exitosa

// la condicion autoentificacion fallida
