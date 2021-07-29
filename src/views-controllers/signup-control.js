import { userSignUp } from '../main.js';

export const signUpUser = (e) => {
  e.preventDefault();
  const name = document.querySelector('#nombres').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  userSignUp(email, password)
    .then((userCredential) => {
    // Signed up
      const user = userCredential.user;
      user.updateProfile({
        displayName: name,
      });
    // .catch((error) => {
    //  const errorCode = error.code;
    //  const errorMessage = error.message;
    // ..
    // });
};
