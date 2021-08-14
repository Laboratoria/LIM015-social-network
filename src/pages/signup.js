const signUpPage = `<section class="container">
<div class="form-container">
  <div class="login-title">
    <h1 class="timeword">Welcome<span class="wordtravel login-title">Traveler!</span><span class="text-signup"> A
        few steps to start your journey</span></h1>

  </div>
  <div class="login-info">

    <span class="input">
      <i class="fas fa-user"></i>
      <input id="signupname" class="inputextcolor" type="text" placeholder="Name" required>
    </span><br>


    <span class="input">
      <i class="fas fa-envelope"></i>
      <input id="signupemail" class="inputextcolor" type="email" placeholder="Email" required>
    </span><br>

    <span class="input">
      <i class="fas fa-lock"></i>
      <input id="signuppassword" class="inputextcolor" type="password" placeholder="Password" required>
    </span><br>
    <p id="emailmessage" ></p>
    <p id="errormsj" ></p>

    <button id="signupbutton" class="button-login">Sign Up</button>
    <br>

    <br>
  </div>
</div>

</section>
`;

export default signUpPage;
