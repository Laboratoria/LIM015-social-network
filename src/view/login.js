export default () => {
 
  const viewLogin = `
    <h1>Pets-Lovers</h1>
    <h2>Welcome to Pet-Lovers</h2>
    <div class="login">
          <img src="img/pet.png" id="fondoPet" class="fondoAnimalPet">
      <textarea id="name" placeholder="Email" id="email" class="name"></textarea>
      <textarea id="password" placeholder="Password" class="password" id="passwords"></textarea>
  <input type="button" class="btn">Longin</button>
    <p>You can also enter with</p>
    <img src="img/face.png" width="40" height="40" class="logoFace">
    <img src="img/gmail.png" width="40px" height="40" class="logoGmail">
    <p>¿You do not have an account?<a href="#">Sign up</a></p>
    </div>`;
    const divElem=document.createElement('div')
    divElem.innerHTML =viewLogin;
    return divElem;
};
