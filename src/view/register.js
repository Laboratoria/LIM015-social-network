export default () => {
  const viewRegister = `
      <h1>Pets-Lovers</h1>
      <h2>Welcome to Pet-Lovers</h2>
      <div class="register">
      <div id="imgRegister">
            <img src="img/animalesFondo.jpg" id="fondo" class="fondoAnimal">
      </div>
      <div id="infoRegister">
        <input type= "text" id="name1" placeholder="Name"  class="name">
        <input type= "text" id="email1" placeholder="Email" class="email">
        <input class="password" type="password" name="password1" id="password1" placeholder="Password">
        <input class="password" type="password" name="password2" id="password2" placeholder="Password">
        <button id="btnRegister"type="button" class="btn">Register</button>
      </div>`;
  const divElem = document.createElement("div");
  divElem.innerHTML = viewRegister;
  return divElem;
};
