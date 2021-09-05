import {
  signIn, loginGoogle,
} from '../scripts/auth.js';
import { userData, getUserData } from '../scripts/firestore.js';

export default () => {
  const viewLogin = document.createElement('section');
  viewLogin.classList.add('container');
  viewLogin.innerHTML = `
      <p>this is a login form </p>


      <section class="forms-container">
      <section class="signin-signup signin" id="signup" >
        <form action="#" class="sign-in-form" id="loginForm">
          <h1 class="title-main"> Skyy 🌜</h1>
          <h2 class="title"> Welcome Back!</h2>
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
          <p class="social-text"> ...Or enter with </p>
          <section class="social-media">
            <a id="btnFacebook" href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a id="btnGmail" href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
          </section>
        </form>
      </section>
    </section>
  
        <section class="content">
          <h3 class="h3">New here?</h3>
          <p class="pa">
            Join today our community across the skies... !
          </p>
          <button class="btn transparent" id="signUpBtn">
            Register
          </button>
        </section>  

      `;

  return viewLogin;
};
