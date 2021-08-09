/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable padded-blocks */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import firebase from '../lib/firebase.js';

export const signIn = () => {

  const view = `
  <section class="contenedorRegister">
  <form>
  <img src='images/laRuta-02.png' alt='La ruta logo' class='logo'/>
  <p class='welcome'>Welcome Traveler!</p>
  <input type='text' id='userName' placeholder='👤 Name' class='input' required />
  <input type='email' id='email' placeholder='✉ Email' class='input' required />
  <input type='password' id='password1' placeholder='🔑 Password' class='input' required />
  <input type='password' id='password2' placeholder='🔑 Confirm Password' class='input' required />
  <div class="buttons">
  <button type='submit'class='btnStart' id="registrar">SIGN IN</button>
  </div>
  </form>
  <</section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
export const register = () => {
  console.log('existe registrar');
  if (document.getElementById('registrar')) {
    document.getElementById('registrar').addEventListener('click', (e) => {
      e.preventDefault();
      console.log('registrando');
      const nameRegister = document.getElementById('userName').value;
      const emailUser = document.getElementById('email').value;
      const passWord = document.getElementById('password1').value;
      const confirmPass = document.getElementById('password2').value;

      if (passWord == confirmPass) {
        console.log('las claves son identicas, se procede a usar firebase');
        firebase.auth().createUserWithEmailAndPassword(emailUser, passWord)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            console.log('conexion firebase register');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });

      } else {

        alert("Las contraseñas no coiciden");
      }
    });
  }
};

