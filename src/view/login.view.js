/* eslint-disable no-unused-vars */
import {
  login,
  logInWithEmail,
} from '../security/security.function.js';
import { getUserInfo } from '../security/current.js';

export function viewLogin() {
  const divElem = document.createElement('article');
  divElem.className = 'article-login';
  divElem.innerHTML = `
  <figure class='figure-login'>
    <img class='fondo-Login1' src='./img/fondoLogin.png' id='fondoLogin1'  >
  </figure>
  <article class='contenedorLogin'>
      <figure class='figure-title-login'>
        <img src='img/pet.jpg' id='fondoPet' class='fondoAnimalPet'>
      </figure> 
   <form action="#" class='frmLogin'>
   <div class="form-login-inputs">
      <input id='email' placeholder='Email' class='btn-texto'>
      <input class='btn-texto' type='password' name='password' id='password' placeholder='Password'>
    </div>  
      <button id='btnsignin' class='btn-signin'>signin</button> 
      <span class='message'></span> 
      <span class='txt'>You can also enter with</span>
    <figure class='figure-google'>
      <img src='img/gmail.png' alt='iGoogle' class='logoGmail' id='btnGoogle'>
    </figure>    
    
    <span class='txt'>¿You do not have an account?</span>
      <button id='registro' class='btn-register' ><a href='#/register'class='a-login-signup'>register</a></button>
    </form>
</article>
`;
  /* const divElem = document.createElement('div');
  divElem.innerHTML = viewLoginv; */
  return divElem;
}

/* inicio de sesion con email */
document.addEventListener('click', (e) => {
  if (e.target.id === 'btnsignin') {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const message = document.querySelector('.message');
    message.innerHTML = '';
    e.preventDefault();
    e.stopPropagation();
    // console.log(btnsignin);
    if (email === '' || password === '') {
      message.innerHTML = 'Por favor llene todos los campos';
    } else {
      logInWithEmail(email, password).then(() => {
        /* const hash = '#/home';
        si el correo esta verificado ingresa a la pagina home */
        window.location.hash = '#/home';
        getUserInfo();
      });
    }
  }
});

/* inicio de sesion con google */
export function initLogin() {
  const buttonLogin = document.querySelector('#btnGoogle');
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    // eslint-disable-next-line no-use-before-define
    logInWithGoogleClick();
  });
}

function logInWithGoogleClick() {
  login()
    .then(() => {
      // getUserInfo();
      window.location.hash = '#/home';
      getUserInfo();
    })
    .catch((error) => {
      /*     Manejar errores aquí. */
      console.log('error');
      /*    El correo electrónico de la cuenta del usuario utilizada. */
    });
}
