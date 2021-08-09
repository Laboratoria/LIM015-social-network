export const signIn = () => {
  const view = `
  <section class="contenedorRegister">
  <form>
  <img src='images/laRuta-02.png' alt='La ruta logo' class='logo'/>
  <p class='welcome'>Welcome Traveler!</p>
  <input type='text' id='userName' placeholder='👤 Name' class='input' required />
  <input type='email' id='email' placeholder='✉ Email' class='input' required />
  <input type='password' id='password1' placeholder='🔑 Password' class='input' required />
  <input type='password' id='password2' placeholder='🔑 Confirm Password' class='input' required />
  <div class="buttons">
  <button type='submit'class='btnStart' id="registrar">SIGN IN</button>
  </div>
  </form>
  <</section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
