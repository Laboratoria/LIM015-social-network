export default () => {
 
  const viewLogin = `
    <h1>Pets-Lovers</h1>
    <h2>Welcome to Pet-Lovers</h2>
    <div class="login">
          <img src="img/pet.png" id="fondoPet" class="fondoAnimalPet">
      <textarea id="email" placeholder="Email" class="email"></textarea>
      <textarea id="password" placeholder="Password" class="password" ></textarea>
      <button type="submit" id="btnsignin" class="signin">signin</button>  
    <a href="#/home">Login</a>
    <p>You can also enter with</p>
    <img src="img/face.png" width="40" height="40" class="logoFace">
    <img src="img/gmail.png" width="40px" height="40" class="logoGmail">
    <p>¿You do not have an account?<a href="#/register">register</a></p>
    </div>`;
    const divElem=document.createElement('div')
    divElem.innerHTML =viewLogin;
    return divElem;
};
const email= document.querySelector("#email");
const password= document.querySelector("#password");
// const buttonSingnin= btnsignin.addEventListener("submit", (e)=>{
//     e.preventDefault();
//      console.log(buttonSingnin);
//  })