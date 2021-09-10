/* eslint-disable no-console */
import {
  loginGoogle, signIn, signUp, emailVerification,
} from '../scripts/auth.js';
import { validateEmail } from '../scripts/validation.js';
import { userData, getUserData } from '../scripts/firestore.js';

export default () => {
  const viewLogin = document.createElement('section');
  viewLogin.classList.add('container');
  viewLogin.innerHTML = `
      <p>this is a login form </p>


      <section class="login-container">
      <section class="signin-signup signin" id="signInForm" >
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
            <input id="newUserName" type="text" placeholder="Username" required /> 
            <p id="error-name"></p>
          </section>
          <section class="input-field">
            <i class="fas fa-envelope"></i>
            <input id="newUserEmail" type="text" placeholder="Email" required />
            <p id="error-email"></p>
          </section>
          <label class="tooltiptext">password must have <br> at least 4 characters</label>
          <section class="input-field">
            <i class="fas fa-lock"></i>
            <input id="newUserPassword" type="password" placeholder="Password" required />
          </section>
          
         <section class="input-field">
            <i class="fas fa-lock"></i>
            <input id="newUserPassword-confirm" type="password" placeholder="Confirm Password" required />
            <p id="error-password"></p>
          </section>
          <br>
          <p id="error-message"></p>
       
          <button class="btn transparent sign-up-email-btn " id="sign-up-email-btn">
            Register
          </button> <!--<input type="submit" value="Login" class="btn solid" />-->
          </section> <br>
          <p id="error-sign-up"></p>
           <p id="email-sent-msg"></p>
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
          error.textContent = 'Please Check your inbox to verify account';
        }
      })
      .catch((err) => {
        error.textContent = err.message;
        setTimeout(() => {
          error.textContent = '';
        }, 5000);
      });
  });

  // ========  R E G I S T E R ============
  const signUpForm = viewLogin.querySelector('.sign-up-email-btn');
  signUpForm.addEventListener('click', (e) => {
    e.preventDefault();
    const newUserName = viewLogin.querySelector('#newUserName').value;
    const newUserEmail = viewLogin.querySelector('#newUserEmail').value;
    const newUserPassword = viewLogin.querySelector('#newUserPassword').value;
    const newUserPasswordConfirm = viewLogin.querySelector('#newUserPassword-confirm').value;
    const msg = viewLogin.querySelector('#email-sent-msg');
    // V A L I D A T I O N S !... ¬u¬
    // password = password-confirm?
    let validationOk = true;
    if (newUserPassword !== newUserPasswordConfirm) {
      document.getElementById('error-password').style.display = 'block';
      document.getElementById('error-password').innerHTML = "Passwords don't match :/";
      document.getElementById('newUserPassword').value = '';
      document.getElementById('newUserPassword-confirm').value = '';
      validationOk = false;
    } else {
      document.getElementById('error-password').style.display = 'none';
    }
    // is password >= 4 ?
    if (newUserPassword === '' || newUserPassword.length < 4) {
      document.getElementById('error-password').style.display = 'block';
      document.getElementById('error-password').innerHTML = '= or > 4 characters !';
      validationOk = false;
    } else {
      document.getElementById('error-password').style.display = 'none';
    }
    // is a valid email?
    if (newUserEmail === '' || !validateEmail(newUserEmail)) {
      document.getElementById('error-email').style.display = 'block';
      document.getElementById('error-email').innerHTML = 'email is not valid :c';
      document.getElementById('error-email').value = '';
      validationOk = false;
    } else {
      document.getElementById('error-email').style.display = 'none';
    }
    // is name field empty?
    if (newUserName === '') {
      document.getElementById('error-name').style.display = 'block';
      document.getElementById('error-name').innerHTML = 'pls provide a name u_u';
      document.getElementById('error-name').value = '';

      validationOk = false;
    } else {
      document.getElementById('error-name').style.display = 'none';
    }

    if (validationOk) {
      signUp(newUserEmail, newUserPassword)
        .then((data) => {
          const dataUser = {
            uid: data.user.uid,
            email: newUserEmail,
            name: newUserName,
          };
          userData(dataUser)
            .then((user) => {
              emailVerification(user);
              msg.textContent = 'Please Check your inbox to verify account';
              window.location.hash = '#/';
              console.log(user);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // document.getElementById('error-sign-up').style.display = 'block';
    // document.getElementById('error-sign-up').innerHTML = 'Pls try again :/';
    // setTimeout(() => {
    //   document.getElementById('error-sign-up').style.display = 'none';
    // }, 5000);
  });
  return viewLogin;
};

// else {
//   setTimeout(() => {
//     document.getElementById('error-sign-up').value = '';
//   }, 5000);
// }
