const loginPage = ` <section class="container">
<div class="form-container">
  <div class="login-title">
    <h1 class="timeword">It's Time to <span class="wordtravel login-title">Travel!</span></h1>
  </div>

  <form id="login" class="login-info">

    <span class="input">
      <i class="fas fa-envelope"></i>
      <input id="loginemail" class="inputextcolor" type="email" placeholder="Email" required>
    </span><br>

    <span class="input">
      <i class="fas fa-lock"></i>
      <input id="loginpassword" class="inputextcolor" type="password" placeholder="Password" required>
    </span><br>

    <button id="button-login" class="button-login">Sign in</button>
    <br>
    <p class="ortext"><strong>- OR -</strong></p>
    <br>
    <div class="icon-container">
      <img id="googlesvg" src="./images/flat-color-icons_google (1).svg" alt="google icon" srcset="" />
      <img id="fbsvg" src="./images/logos_facebook.svg" alt=" facebook icon" srcset="" />
    </div>
    <p class="register-text">Don't have an account?<span id="signup" class="register-text" >Sign Up</span>
    </p>
  </form>
</div>

</section>`;
export default loginPage;
