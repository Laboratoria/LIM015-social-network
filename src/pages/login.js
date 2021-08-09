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
  </form>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};

export const logueo = () => {
  if (document.getElementById('logeo')) {
    console.log('existo');
    document.getElementById('logeo').addEventListener('click', (e) => {
      console.log(e);
      e.preventDefault();
      const emailUser = document.getElementById('email').value;
      const password = document.getElementById('password1').value;
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Este es el enlace para habilitar la autenticación de firebase (se copia html)
      firebase.auth().signInWithEmailAndPassword(emailUser, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          console.log('se conecto firebase');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    });
  }

};
export const register = () => {
  console.log('existe registrar')
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

        alert("Las contraseñas no coiciden")
      }
    });
  }
};
