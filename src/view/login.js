export const logInTemplate = () => {
  const container = document.querySelector('#container');
  const sectionLogIn = document.createElement('div');
  sectionLogIn.classList.add('iOne');
  const templateLogIn = `
    <div class="divCabecera">
      <img src="./img/logoTuristik.png" class="imgLogo" alt="logoTuristik">
      <h1>Bienvenidas</h1>
    </div>
    <form>
      <input id="emailLogIn" type="email" placeholder="Enter Email" class="inputForm" required>
      <input id="passwordLogIn" type="password" placeholder="Enter Password" class="inputForm" required>
    </form>
    <button type="submit" class="btnLogIn">Log In</button><br>
    <span>New here? <a id="linkRegister" href="#">Register</a></span>
    <div class="divIconG">
      <img src="./img/icons8-logo-de-google.svg" alt="iGoogle" class="iGoogle">
    </div>
    `;
  sectionLogIn.innerHTML = templateLogIn;
  container.appendChild(sectionLogIn);
  return logInTemplate;
};
