/* eslint-disable no-console */
import { loginGoogle } from '../scripts/auth.js';
import { userData, getUserData } from '../scripts/firestore.js';

export default () => {
  const viewLogin = document.createElement('section');
  viewLogin.classList.add('container');
  viewLogin.innerHTML = `
      <p>this is a login form </p>


      <section class="login-container">
      <section class="signin-signup signin" id="signup" >
        <form action="#" class="sign-in-form" id="loginForm">
          <h1 class="title-main"> Skyy 🌜</h1>
          <h2 class="title"> Welcome Back!</h2>

        <section  class="inputs-container ">
          <section class="input-field">
            <i class="fas fa-envelope"></i>
            <input id="userEmail" type="text" placeholder="Email" />
          </section>
          <section class="input-field">
            <i class="fas fa-lock"></i>
            <input id="userPassword" type="password" placeholder="Password" />
          </section>
          <input type="submit" value="Login" class="btn solid" />
          <p id="error-message"></p>
          <p class="social-text"> ...or enter with </p>
          <section class="social-media">
            <a id="btnGmail" href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a id="btnFacebook" href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            
          </section>
        </section>
        </form>
      </section>

      <section class="content">

      <form action="#" class="sign-in-form" id="loginForm">
          <!--<h1 class="title-main"> Skyy 🌜</h1>
          <h2 class="title"> Welcome Back!</h2>-->
        <h2 class="tittle">New here?</h2>
        <section  class="inputs-container ">
        
          <p class="pa">
            Join today our community <br>across the skies... !
          </p>
          <section class="input-field">
            <i class="fas fa-user"></i>
            <input id="userName" type="text" placeholder="Username" />
          </section>
          <section class="input-field">
            <i class="fas fa-envelope"></i>
            <input id="userEmail" type="text" placeholder="Email" />
          </section>
          <section class="input-field">
            <i class="fas fa-lock"></i>
            <input id="userPassword" type="password" placeholder="Password" />
          </section>
          <!--<input type="submit" value="Login" class="btn solid" />-->
          <p id="error-message"></p>
        
          <button class="btn transparent" id="signUpBtn">
            Register
          </button>
          </section>
        </section>
        </form>


    </section>
  
      `;

  // Login
  const btnGoogle = viewLogin.querySelector('#btnGmail');
  btnGoogle.addEventListener('click', () => {
    console.log('You press the Google option c:');
    loginGoogle()
      .then((data) => {
        getUserData(data.user.uid)
          .then((doc) => {
            if (doc.exists) {
              window.location.hash = '#/community';
            } else {
              userData(data.user)
                .then(() => {
                  window.location.hash = '#/community';
                });
            }
          });
      });
  });
  return viewLogin;
};
