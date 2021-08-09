export const registerTemplate = () => {
  const sectionRegister = document.createElement('div');
  sectionRegister.classList.add('iTwo');
  const templateLogIn = `
    <div class="divCabecera">
      <img src="./img/logoTuristik.png" class="imgLogo" alt="LogoTuristik">
    </div>
    <form>
      <!-- USERNAME INPUT -->
      <input type="text" placeholder="Full Name" id="nameRegister" class="inputForm" required>
      <!-- EMAIL INPUT -->
      <input type="email" placeholder="Email" id="emailRegister" class="inputForm" required>
      <!-- PASSWORD INPUT -->
      <input type="password" name="password" placeholder="Password" id="passwordRegister" class="inputForm" required>
    </form>
    <button type="submit" class="btnRegister">Register</button><br>
    <span>Already a member? <a id="linkLogIn" href="#/LogIn">Log In</a> </span>
    <div class="divIconG">
      <img src="./img/icons8-logo-de-google.svg" alt="iGoogle" class="iGoogle">
    </div>
    `;
  sectionRegister.innerHTML = templateLogIn;
  return sectionRegister;
};
