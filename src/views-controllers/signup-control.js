import { userSignUp, currentUser, verifyEmail } from '../firebase/autenticacion.js';
import { createUser } from '../firebase/data-base.js';

export const signUpUser = (e) => {
  e.preventDefault(); // cancela el evento de reinicio del formulario
  const name = document.querySelector('#nombres').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  // yo
  const msgerr = document.querySelector('#error1');
  const foto = 'foto';

  userSignUp(email, password)
    .then(() => {
      if (name === '' || email === '' || password === '') {
        console.log('errorrr');
      } else {
        verifyEmail();
        // yo
        msgerr.textContent = 'Por favor revise su bandeja de entrada para verificar su cuenta';
      }
      createUser(name, email, currentUser.uid, foto);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
};
