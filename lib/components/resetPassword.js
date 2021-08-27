export const resetPassword = () => {
  const container = document.createElement('section');
  container.classList.add('resetPasswordContainer');
  const element = document.createElement('section');
  element.classList.add('resetPasswordSection');
  element.innerHTML = `
    <form id="passwordForm" class="resetPasswordForm">
      <img class="desktop-logo" src="./assets/img/logo.svg" alt="petstagram"/>
      <img class="icon icon-lock" src="./assets/img/lock.svg"/>
      <label class="formText formText-bold formText-medium">¿Tienes problemas para iniciar sesión?</label>
      <label class="formText">Ingresa tu correo y te enviaremos un enlace para que recuperes el acceso a tu cuenta</label>
      <input id="resetEmail" class="formBox" name="email" type="email" placeholder="correo@example.com" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$" title="Ejemplo: correo@example.com" required/>
      <button id="resetPasswordButton" class="formButton">Recuperar contraseña</button>
      <label id="signUp" class="formText formText-bold">Crear cuenta nueva</label>
      <label id="signIn" class="formText formText-bold">Volver a inicio de sesión</label>
    </form>
  `;
  container.appendChild(element);
  return container;
};
