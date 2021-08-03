const signupForm = document.querySelector('.sign-up-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('signup-user').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  console.log(user, email, password);
  // debajo de "auth" colocamos un método de Firebase, que va a permitirnos enviar los datos.
  // lo que capturamos en el value, le brindando a Firebase para que pueda validarlo.
  /* auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
    console.log('sign up'); // limpiar el formulario
  }); */
  // .catch
  firebase.auth().createUserWithEmailAndPassword(email, password);
    .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});

const signinForm = document.querySelector('.sign-in-form');

signinForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;
  console.log(email, password);
})
