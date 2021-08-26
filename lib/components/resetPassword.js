export const resetPassword = () => {
  const container = document.createElement('section');
  container.classList.add('passwordContainer');
  const element = document.createElement('section');
  element.classList.add('passwordSection');
  element.innerHTML = `
    <form id="passwordForm" class="resetForm">
      <img class="desktop-logo" src="./assets/img/logo.svg" alt="petstagram" display="none"/>
      <i class="ai-lock-on"></i>
      <label class="formText"><b>¿Tienes problemas para iniciar sesión?</b></label>
      <label class="formText">Ingresa tu correo y te enviaremos un enlace para que recuperes el acceso a tu cuenta</label>
      <input id="resetEmail" class="formBox" name="email" type="email" placeholder="correo@example.com" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$" title="Ejemplo: correo@example.com" required/>
      <button id="resetPasswordButton" class="formButton">Recuperar contraseña</button>
      <label id="signUp" class="formText">Crear cuenta nueva</label>
      <label id="signIn" class="formText">Volver a inicio de sesión</label>
    </form>
  `;
  container.appendChild(element);
  return container;
};
