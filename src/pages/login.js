/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable padded-blocks */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import firebase from '../lib/firebase.js';

export const login = () => {
  const view = `
  <section class="contenedorFormulario">
  <form >
  <img src='images/laRuta-02.png' alt='La ruta logo' class='logo'/>
  <p class='welcome'>Welcome Traveler!</p>
  <input type='email' id='email' placeholder='✉ Email' class='input' required />
  <input type='password' id='password1' placeholder='🔑 Password' class='input' required />
  <div class="buttons">
    <button id='logeo' type='submit' class='btnStart'>LOG IN</button>
  </div>
  <div  class="buttons">
    <button type='submit'class='btnStart'>SIGN IN</button>
  </div>
  <h3>Or sign in with ...</h3>
  <div class="imgFacebookGoogle">
  <img src='images/facebook.png' alt='Facebook' class='facebook'>
  <img src='images/google.png' alt='Google' class="google">
  </div>
  </form>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};

export const logueo = () => {
  document.getElementById('logeo').addEventListener('click', (e) => {
    e.preventDefault();
    const emailUser = document.getElementById('email').value;
    const password = document.getElementById('password1').value;

    // documentacion firebase: https://firebase.google.com/docs/web/setup#available-libraries
    // Este es el metodo de firebase para autenticar:
    firebase.auth().signInWithEmailAndPassword(emailUser, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('se conecto a firebase');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
      });
  });
};
