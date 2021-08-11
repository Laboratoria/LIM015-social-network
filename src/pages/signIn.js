import firebase from '../lib/firebase.js';

export const signIn = () => {
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
  <section class="contenedorRegister">
    <form>
    <img src='images/laRuta-02.png' alt='La ruta logo' class='logo'/>
    <p class='welcome'>Welcome Traveler!</p>
    <span id='errorMessage'></span>
    <input type='text' id='userName' placeholder='👤 Name' class='input' required />
    <input type='email' id='email' placeholder='✉ Email' class='input' required />
    <input type='password' id='password1' placeholder='🔑 Password' class='input' required />
    <input type='password' id='password2' placeholder='🔑 Confirm Password' class='input' required />
    <div class="buttons">
      <button type='submit'class='btnStart' id="registrar">SIGN IN</button>
    </div>
    </form>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};

export const register = () => {
  document.getElementById('registrar').addEventListener('click', (e) => {
    e.preventDefault();
    // const nameRegister = document.getElementById('userName').value;
    const emailUser = document.getElementById('email').value;
    const passWord = document.getElementById('password1').value;
    const confirmPass = document.getElementById('password2').value;

    if (passWord === confirmPass) {
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
      alert('Las contraseñas no coiciden');
    }
  });
};
