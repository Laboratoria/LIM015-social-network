import { userSignUp, currentUser, verifyEmail } from '../firebase/autenticacion.js';
import { createUser } from '../firebase/data-base.js';

export const signUpUser = (e) => {
  e.preventDefault();
  const name = document.querySelector('#nombres').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const foto = 'foto';

  userSignUp(email, password)
    .then((userCredential) => {
    // Signed up
      const user = userCredential.user;
      user.updateProfile({
        displayName: name,
      });
      verifyEmail();
      createUser(name, email, currentUser.uid, foto);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
};
