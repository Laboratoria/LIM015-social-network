/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import {
  emailVerication,
  registerWithEmail,
} from '../security/security.function.js';

export function viewRegister() {
  const divElem = document.createElement('article');
  divElem.className = 'article-register';
  divElem.innerHTML = `
    <figure class='figure-register'>
      <img class='fondoAnimal1' src='./img/parque.png' id='fondoRegister1'>
    </figure>
  <article class='container-Register'>
      <figure class='figure-title-register'>
        <img src='img/pet.jpg' id='fondoPet' class='fondoAnimalPet'>
      </figure>
    <form action="#" class='frmregister'>
    <div class='form-register-inputs'>
      
        <input  id='email1' placeholder='Email' class='btn-texto'>
        <span id='errorEmail' class='errorMessage'></span>
        <input class='btn-texto' type='password' name='password1' id='password1' placeholder='Password'>
        <input class='btn-texto' type='password' name='password2' id='password2' placeholder='Confir Password'>   
    </div>
        <button id='btnRegister'type='button' class='btn'>Register</button>
        <span class='message'></span>  
        <button id='login'class='btn'> <a href='#/login'class='a-register-signup'>Login</a></button>
    </form>
  </article>
 `;

  /* const divElem = document.createElement('div');
  divElem.innerHTML = viewRegisterv; */
  return divElem;
}

export function initRegister() {
  const btnRegister = document.getElementById('btnRegister');
  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    // eslint-disable-next-line no-use-before-define
    validate();
  });
}

// funcion para limpiar los campos
function clean() {
  const email = document.querySelector('.btn-texto');
  const password = document.querySelector('#password1');
  const confirmPassword = document.querySelector('#password2');

  email.innerHTML = '';
  password.innerHTML = '';
  confirmPassword.innerHTML = '';
}

/* validacion register */
function validate() {
  const email = document.querySelector('.btn-texto').value;
  const password = document.querySelector('#password1').value;
  const confirmPassword = document.querySelector('#password2').value;
  const message = document.querySelector('.message');
  message.innerHTML = '';

  if (email === '' || password === '' || confirmPassword === '') {
    message.innerHTML = 'Por favor llene todos los campos';
  } else if (password !== confirmPassword) {
    message.innerHTML = 'Las contraseñas deben coincidir';
  } else {
    registerWithEmail(email, password)
      .then((response) => {
        // console.log(response);
        clean();
        emailVerication();
        sessionStorage.setItem('nameRegister', email);
        window.location.hash = '#/LogIn';
        window.alert('mensaje de verificacion enviado');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        clean();
        const errorCode = err.code;
        if (errorCode === 'auth/email-already-in-use') {
          message.innerHTML = 'El correo electrónico ya está registrado';
        } else if (errorCode === 'auth/invalid-email') {
          message.innerHTML = 'Correo electrónico no válido';
        } else if (errorCode === 'auth/weak-password') {
          message.innerHTML = 'La contraseña debe contener mínimo 6 carácteres';
        }
      });
  }
}
