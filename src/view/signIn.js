export const signIn = () => {
  const viewSignIn = `
    <div class="home-container">
      <figure class="container-img">
        <img class="cat-gif" src='https://i.pinimg.com/originals/35/ce/9f/35ce9f85da291b4c1c504d8cbd37e8ee.gif'>
      </figure>
      <form id="signin-form">
        <div>
          <input type="email" placeholder="Correo electrónico" id="signin-email">
          <span class="error-email"></span>
        </div>
        <div>
          <input type="password" placeholder="Contraseña" id="signin-password">
          <span class="error-password"><span>
        </div>
        <button type="submit" id="start-button">Iniciar</button>
      </form>
      <ul class="home-list">
        <li class="access-items">
          <a href="#/google" class="access-items">Acceder con Google</a>
        </li>
        <li>
          <span>¿No tienes cuenta?</span><a href="#/SignUp"> Create una.</a>
        </li>
      </ul>
    </div>`;

  const sectionElement = document.createElement('div');
  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = viewSignIn;

  const signinBtm = sectionElement.querySelector('#start-button');
  signinBtm.addEventListener('click', (e) => {
    e.preventDefault();
    const signinEmail = sectionElement.querySelector('#signin-email').value;
    const signInPassword = sectionElement.querySelector('#signin-password').value;
    firebase.auth().signInWithEmailAndPassword(signinEmail, signInPassword)
      .then(() => {
        console.log('inscrito');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
  return sectionElement;
};
