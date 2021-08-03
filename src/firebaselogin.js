const signupForm = document.querySelector('.sign-up-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('signup-user').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  // debajo de "auth" colocamos un método de Firebase, que va a permitirnos enviar los datos.
  // lo que capturamos en el value, le brindando a Firebase para que pueda validarlo.
  firebase.auth()
    .createUserWithEmailAndPassword(user, email, password)
    // "then" va a devolver una respuesta, que son las credenciales del usuario
    .then(userCredential => {
      console.log('sign up'); // signupForm.reset(); // limpiar el formulario
    });
});
