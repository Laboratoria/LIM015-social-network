export const signUp = () => {
  const sectionElement = document.createElement('section');
  const viewSignUp = `
    <div  class="home-container">
      <h2>Regístrate</h2>
      <form id="signup-form">
        <div>
          <input id="signup-username" type="text" placeholder="Nombre de usuario" required>
          <span id="error-username"></span>
        </div>
        <div>
          <input id="signup-email" type="text" placeholder="Correo electrónico" required>
          <span id="error-email"></span>
        </div>
        <div>
          <input id="signup-password" type="password" placeholder="Contraseña" required>
          <span id="error-password"></span>
        </div>
        <button id="btn_create-account" type="submit" class="start-button"> Crear cuenta </button>
      </form>
      <ul class="home-list">
        <li>
          <span>¿Tiene cuenta?</span><a href="#/SignIn"> Inicia con ella</a>
        </li>
      </ul>
    </div>`;

  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = viewSignUp;

  // const signupForm = document.querySelector('#signup-form');
  // const btnCreateAcc = document.getElementById('btn_create-account');

  // btnCreateAcc.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   console.log('Envia datos');
  // });

  return sectionElement;
};
