/* eslint-disable no-console */
export const signUp = () => {
  const sectionElement = document.createElement('section');
  const viewSignUp = `
    <div  class="home-container">
      <h2 class="signup-register">Regístrate</h2>
      <form id="signup-form" class="signin-form">
        <div class="form-div">
          <input class="input" id="signup-username" type="text" placeholder="Nombre de usuario"><br>
          <span class="error-username"></span>
        </div>
        <div class="form-div">
          <input class="input" id="signup-email" type="email" placeholder="Correo electrónico" required><br>
          <span class="error-email"></span>
        </div>
        <div class="form-div">
          <input class="input" id="signup-password" type="password" placeholder="Contraseña"><br>
          <span class="error-password"></span>
        </div>
        <button class="create-button" type="submit" id="create-account">
          Crear cuenta
        </button>
      </form>
      <ul class="home-list">
        <li class="signin-access-items">
          <button class="google-button"><a id="signup-google" class="sgn" href="#/google" class="access-items">Registrarse con Google</a></button>
       </li>
        <li class="signin-access-items">
          <span>¿Tiene cuenta?</span><a class="sgn" href="#/SignIn"> Inicia con ella</a>
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

    errorEmail.innerHTML = '';
    errorPassword.innerHTML = '';
    if (signupPassword === '' && signupEmail === '') {
      errorPassword.innerHTML = 'Inserte contraseña';
      errorEmail.innerHTML = 'Inserte email';
    } else if (signupPassword === '') {
      errorPassword.innerHTML = 'Inserte contraseña';
    } else if (signupEmail === '') {
      errorEmail.innerHTML = 'Inserte email';
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

  const signUpGoogle = sectionElement.querySelector('#signup-google');
  signUpGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider)
      .then(() => {
        window.location.hash = '#/OnlyCats';
        console.log('You\'re now signed in !');
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return sectionElement;
};
