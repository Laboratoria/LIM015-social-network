export const LOGIN = () => {
  const view = `
  <section class='contenedorFormulario'>
    <form >
      <img src='images/laRuta-02.png' alt='La ruta logo' class='logo'/>
      <p class='welcome'>Welcome Traveler!</p>
      <span id='errorMessage' class='errorMessage'></span>
      <input type='email' id='email' placeholder='✉ Email' class='input' />
      <input type='password' id='password1' placeholder='🔑 Password' class='input' minlength='6'/>
      <div class='buttons'>
        <button id='logeo' type='submit' class='btnStart'>LOG IN</button>
      </div>
      <div  class='buttons'>
        <button id='signin' type='submit'class='btnStart'>SIGN IN</button>
      </div>
      <p>Or sign in with ...</p>
      <div class='imgFacebookGoogle'>
        <img id='facebook' src='images/facebook.png' alt='Facebook' class='iconSocial'>
        <img id='google' src='images/google.png' alt='Google' class='iconSocial'>
      </div>
    </form>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
