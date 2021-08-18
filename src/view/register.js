export const registerTemplate = () => {
  const sectionRegister = document.createElement('div');
  sectionRegister.classList.add('iTwo');
  const templateRegister = `
    <div class="divCabecera">
      <img src="./img/logoTuristik.png" class="imgLogo" alt="LogoTuristik">
    </div>
    <form id="formRegister">
      <!-- USERNAME INPUT -->
      <input type="text" placeholder="Full Name" id="nameRegister" class="inputForm" required>
      <!-- EMAIL INPUT -->
      <input type="email" placeholder="Email" id="emailRegister" class="inputForm" required>
      <!-- PASSWORD INPUT -->
      <input type="password" name="password" placeholder="Password" id="passwordRegister" class="inputForm" required>
      <button type="submit" class="btnRegister" id="registerButton" >Register</button>
      </form>
    <br>
    <span>Already a member? <a id="linkLogIn" href="#/LogIn">Log In</a> </span>
    <div class="divIconG">
      <img src="./img/icons8-logo-de-google.svg" alt="iGoogle" class="iGoogle">
    </div>
    `;
  sectionRegister.innerHTML = templateRegister;
  const btnRegister = sectionRegister.querySelector('#registerButton');
  const emailRegister = sectionRegister.querySelector('#emailRegister').value;
  const passwordRegister = sectionRegister.querySelector('#passwordRegister').value;
  console.log(btnRegister, emailRegister, passwordRegister);
  return sectionRegister;
};
