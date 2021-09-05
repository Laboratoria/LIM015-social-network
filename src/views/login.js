/* eslint-disable no-console */
import {
  loginGoogle, signIn,
} from '../scripts/auth.js';
// import { validateEmail } from '../scripts/validation.js';
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
          <input type="submit" value="Login" class="btn sign-in-email-btn" />
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

      <form action="#" class="sign-in-form" id="signUpForm">
          <!--<h1 class="title-main"> Skyy 🌜</h1>
          <h2 class="title"> Welcome Back!</h2>-->
        <h2 class="tittle">New here?</h2>
        <section  class="inputs-container ">
        
          <p class="pa">
            Join today our community <br>across the skies... !
          </p>
          <section class="input-field">
            <i class="fas fa-user"></i>
            <input id="newUserName" type="text" placeholder="Username" />
          </section>
          <section class="input-field">
            <i class="fas fa-envelope"></i>
            <input id="newUserEmail" type="text" placeholder="Email" />
          </section>
          <section class="input-field">
            <i class="fas fa-lock"></i>
            <input id="newUserPassword" type="password" placeholder="Password" />
          </section>
          
          <!--<section class="input-field">
            <i class="fas fa-lock"></i>
            <input id="newUserPassword-confirm" type="password" placeholder="Confirm Password" />
            <p id="error-pass"></p>
          </section>-->
         
          <p id="error-message"></p>
        
          <button class="btn transparent sign-up-email-btn " id="sign-up-email-btn">
            Register
          </button> <!--<input type="submit" value="Login" class="btn solid" />-->
          </section>
        </section>
        </form>


    </section>
  
      `;

  // ========  L O G I N  ============
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

  // verifying user account with email
  const signInForm = viewLogin.querySelector('.sign-in-email-btn');
  signInForm.addEventListener('click', (e) => {
    e.preventDefault();
    const email = viewLogin.querySelector('#userEmail').value;
    const password = viewLogin.querySelector('#userPassword').value;
    const error = viewLogin.querySelector('#error-message');
    signIn(email, password)
      .then((data) => {
        if (data.user.emailVerified) {
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
        } else {
          error.textContent = 'Sign in to your email to verify your account';
        }
      })
      .catch((err) => {
        error.textContent = err.message;
        setTimeout(() => {
          error.textContent = '';
        }, 5000);
      });
  });

  return viewLogin;
};

// ========  R E G I S T E R ============

/*
// ========  R E G I S T E R ============
  const signUpForm = viewLogin.querySelector('.sign-up-email-btn');
  signUpForm.addEventListener('click', (e) => {
    e.preventDefault();
    const newUserName = viewLogin.querySelector('#newUserName').value;
    const newUserEmail = viewLogin.querySelector('#newUserEmail').value;
    const newUserPassword = viewLogin.querySelector('#newUserPassword').value;
    const error = viewLogin.querySelector('#error-message');
    signUp(newUserEmail, newUserPassword)
      .then((data) => {
        const dataUser = {
          uid: data.user.uid,
          email: newUserEmail,
          name: newUserName,
        };
        userData(dataUser)
        .then((result) => {
          emailVerification(result);
          window.location.hash = '#/';

        });
        .catch((error) =>{
          console.log(error);
        });

      .catch(() => {
        document.getElementById('newUserName').value = '';
        document.getElementById('newUserEmail').value = '';
        document.getElementById('newUserPassword').value = '';
        document.getElementById('newUserPassword-confirm').value = '';
        error.textContent = err.message;
        setTimeout(() => {
          error.textContent = '';
        }, 5000);
      });
  });

  return viewLogin;
}; */
