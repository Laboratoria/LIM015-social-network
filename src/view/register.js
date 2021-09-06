export default () => {
 
    const viewRegister = `
      <h1>Pets-Lover</h1>
      <h2>Welcome to Pet-Lover</h2>
      <div class="register">
            <img src="img/animalesFondo.jpg" id="fondo" class="fondoAnimal">
        <textarea id="name" placeholder="Name"  class="name"></textarea>
        <textarea id="email" placeholder="Email" class="email"></textarea>
        <textarea id="password" placeholder="Password" class="password" ></textarea>
    <input type="button" class="btnRegister">Register</button>
      </div>`;
      const divElem=document.createElement('div')
      divElem.innerHTML =viewRegister;
      return divElem;
  };