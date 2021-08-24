export const signUpForm = () => {
  const container = document.createElement('section');
  const element = document.createElement('section');
  element.innerHTML = `
    <form id="signUp">
      <img src="./assets/img/logo-mobile.svg" alt="petstagram"/>
      <input id="signUpUserName" class="formBox" name="user" type="text" placeholder="nombre de usuario" pattern="^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$" title="Solo puede contener letras, puntos y guiones." required/>
      <input id="signUpEmail" class="formBox" name="email" type="email" placeholder="correo@example.com" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$" title="Ejemplo: correo@example.com" required/>
      <input id="signUpPassword" class="formBox" name="password" type="password" placeholder="contraseña" pattern="^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$" title="La contraseña debe tener al menos entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos." required/>
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
