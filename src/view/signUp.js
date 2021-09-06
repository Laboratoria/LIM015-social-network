export const signUp = () => {
  const viewSignUp = `
    <div  class="home-container">
      <h2>Regístrate</h2>
      <form id="signup-form">
        <div>
          <input id="signup-username" type="text" placeholder="Nombre de usuario">
        </div>
        <div>
          <input id="signup-email" type="text" placeholder="Correo electrónico">
        </div>
        <div>
          <input id="signup-password" type="password" placeholder="Contraseña">
        </div>
        <button id="create-account" type="submit" class="start-button"> Crear cuenta </button>
      </form>
      <ul class="home-list">
        <li>
          <a href="#/SignIn">¿Tiene cuenta? Inicia con ella</a>
        </li>
      </ul>
    </div>`;
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = viewSignUp;

  // const signupForm = document.querySelector('#signup-form');
  // signupForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   console.log('Envia datos');
  // });

  return sectionElement;
};
