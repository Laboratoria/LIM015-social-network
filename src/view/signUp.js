/* eslint-disable no-console */
export const signUp = () => {
  const sectionElement = document.createElement('section');
  const viewSignUp = `
    <div  class="home-container">
      <h2>Regístrate</h2>
      <form id="signup-form">
        <div>
          <input id="signup-username" type="text" placeholder="Nombre de usuario" required>
          <span class="error-username"></span>
        </div>
        <div>
          <input id="signup-email" type="email" placeholder="Correo electrónico" required>
          <span class="error-email"></span>
        </div>
        <div>
          <input id="signup-password" type="password" placeholder="Contraseña" required>
          <span class="error-password"></span>
        </div>
        <button type="submit" id="create-account">
          Crear cuenta 
        </button>
      </form>
      <ul class="home-list">
        <li>
          <span>¿Tiene cuenta?</span><a href="#/SignIn"> Inicia con ella</a>
        </li>
      </ul>
    </div>`;

  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = viewSignUp;

  const signupForm = sectionElement.querySelector('#create-account');
  signupForm.addEventListener('click', (e) => {
    e.preventDefault();
    /*  const signupUsername = sectionElement.querySelector('#signup-username').value; */
    const signupEmail = sectionElement.querySelector('#signup-email').value;
    const signupPassword = sectionElement.querySelector('#signup-password').value;
    const errorEmail = sectionElement.querySelector('.error-email');
    const errorPassword = sectionElement.querySelector('.error-password');

    if (signupEmail === '') {
      errorEmail.innerHTML = 'Inserte email';
    } else if (signupPassword === '') {
      errorPassword.innerHTML = 'Inserte contraseña';
    } else {
      firebase.auth()
        .createUserWithEmailAndPassword(signupEmail, signupPassword)
        .then(() => {
          window.location.hash = '#/OnlyCats';
          console.log('registrado');
        })
        .catch((error) => {
          const errorCode = error.code;
          /* const errorMessage = error.message; */
          if (errorCode === 'auth/email-already-in-use') {
            errorEmail.innerHTML = 'El correo electrónico ya está en uso.';
          } else if (errorCode === 'auth/weak-password') {
            errorPassword.innerHTML = 'La contraseña es muy débil.';
          }
        });
    }
  });
  return sectionElement;
};
