/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable padded-blocks */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import firebase from '../lib/firebase.js';

export const login = () => {
  const view = `
  <header id='header'>
    <nav class='menu'>
      <ul>
        <li class='items'>
          <a href='#/'>Login</a>
        </li>
        <li class='items'>
          <a href='#/SignIn'>Sign In</a>
        </li>
      </ul>
    </nav>
  </header>
  <section class="contenedorFormulario">
    <form >
      <img src='images/laRuta-02.png' alt='La ruta logo' class='logo'/>
      <p class='welcome'>Welcome Traveler!</p>
      <input type='email' id='email' placeholder='✉ Email' class='input' />
      <input type='password' id='password1' placeholder='🔑 Password' class='input' />
      <div class="buttons">
        <button id='logeo' type='submit' class='btnStart'>LOG IN</button>
      </div>
      <div  class="buttons">
        <button type='submit'class='btnStart'>SIGN IN</button>
      </div>
      <h3>Or sign in with ...</h3>
      <div class="imgFacebookGoogle">
      <img id='facebook' src='images/facebook.png' alt='Facebook' class='facebook'>
      <img id='google' src='images/google.png' alt='Google' class="google">
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

    if (emailUser === '' || password === '') {
      alert('You must log in first');
    } else {
      // documentacion firebase: https://firebase.google.com/docs/web/setup#available-libraries
      // Este es el metodo de firebase para autenticar:
      firebase
        .auth()
        .signInWithEmailAndPassword(emailUser, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("se conecto a firebase");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          alert(errorMessage);
        });
    }
  });
};

export const loginWithFacebook = () => {
  document.getElementById("facebook").addEventListener('click', (e) => {
    e.preventDefault();
    console.log('paso fb');
  });
};

// const authSuccess = () => {
//   auth.onAuthStateChanged(user => {
//     if (user) {
//       console.log('auth: sign in')
//     } else {
//       console.log('auth: sign out')
//     }
//   });
// };
