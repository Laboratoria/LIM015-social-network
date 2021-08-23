export const signUpForm = () => {
  const container = document.createElement('section');
  const element = document.createElement('section');
  element.innerHTML = `
    <form id="signUp">
      <img src="./assets/img/logo-mobile.svg" alt="petstagram"/>
      <input id="signUpUserName" class="formBox" type="text" placeholder="nombre de usuario" required/>
      <input id="signUpEmail" class="formBox" type="email" placeholder="correo@example.com" required/>
      <input id="signUpPassword" class="formBox" type="password" placeholder="contraseña" required/>
      <i class="icon icon-gray icon-eye ai-eye-closed" id="togglePassword"></i>
      <input type="checkbox" class="formCheckBox" required/><label class="formText">Acepto términos y condiciones</label>
      <button id="signUpButton">Registrarte</button>
      <label class="formText">¿Ya tienes una cuenta?<span id="signIn"><b>Inicia sesión</b></span></label>
    </form>
  `;
  container.appendChild(element);
  const togglePassword = container.querySelector('#togglePassword');
  const password = container.querySelector('#signUpPassword');
  togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.classList.toggle('ai-eye-open');
  });
  const signUpButton = container.querySelector('#signUpButton');
  signUpButton.addEventListener('click', () => {
    // registro correcto
  });
  return container;
};
