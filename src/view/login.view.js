import { login } from "../security/security.function.js";

export function viewLogin() {
  const viewLogin = `
  <form class="contenedorLogin">
    <h1>Pets-Lovers</h1>
    <div class="login">
    <div id="imgLogin">
          <img src="img/pet.png" id="fondoPet" class="fondoAnimalPet">
          </div>
          <div id="info">
      <input id="email" placeholder="Email" class="email">
      </div>
      <div id="information">
      <input class="password" type="password" name="password" id="password" placeholder="Password">
      </div>
      <div id="btnlogin">
      <button type="submit" id="btnsignin" class="btn">signin</button>  
      </div>
      </div>
    <p>You can also enter with</p>
    <img src="img/face.png" width="40" height="40" class="logoFace">
    <div id="btnGoogleLogin">
    <button id="btnGoogle">Google</button>
    </div>
    <input type="image" src="img/gmail.png" style= "width:40px; height:40px"; class="logoGmail" id="logoGmail">
    <p>¿You do not have an account?<a href="#/register">register</a></p>
    </div>
    </form>`;
  const divElem = document.createElement("div");
  divElem.innerHTML = viewLogin;
  return divElem;
};

export function initLogin(){
  const buttonLogin=document.querySelector('#btnGoogle');
  buttonLogin.addEventListener("click", showLogin);
}

async function showLogin(){
  try{
    await login();
  }catch(error){
    console.log(error);
  }
}