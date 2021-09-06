export default () => {
 
    const viewRegister = `
      <h1>Pets-Lover</h1>
      <h2>Welcome to Pet-Lover</h2>
      <div class="login">
            <img src="img/animalesFondo.jpg" id="fondo" class="fondoAnimal">
        <textarea id="name" placeholder="Name" id="name" class="name"></textarea>
        <textarea id="password" placeholder="Password" class="password" id="passwords"></textarea>
        <textarea id="password" placeholder="Password" class="password" id="passwords"></textarea>
        <textarea id="password" placeholder="Password" class="password" id="passwords"></textarea>

    <input type="button" class="btn">Longin</button>
      <p>You can also enter with</p>
      <img src="img/face.png" width="40" height="40" class="logoFace">
      <img src="img/gmail.png" width="40px" height="40" class="logoGmail">
      <p>¿You do not have an account?<a href="#">Sign up</a></p>
      </div>`;
      const divElem=document.createElement('div')
      divElem.innerHTML =viewRegister;
      return divElem;
  };