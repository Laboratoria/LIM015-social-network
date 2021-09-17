import { login } from "../security/security.function.js";
import { logInWithEmail,logInWithGoogle,logout}from "../security/security.function.js";

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
    <div id="btnGoogleLogin">
    <button id="btnGoogle">Google</button>
    </div>
    <input type="image" src="img/gmail.png" style= "width:40px; height:40px"; class="logoGmail" id="logoGmail">
    <span class="message"></span>
    <p>¿You do not have an account?<a href="#/register">register</a></p>
    </div>
    </form>`;
  const divElem = document.createElement("div");
  divElem.innerHTML = viewLogin;
  return divElem;
}

export function initLogin() {
  const buttonLogin = document.querySelector("#btnGoogle");

  buttonLogin.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    showLogin();
    logInWithGoogleClick();
   
  });
  //buttonLogin.addEventListener("click", showLogin);
}

async function showLogin() {
  try {
    await login();
  } catch (error) {
    console.log(error);
  }
}

export function initLoginBtn() {
  const buttonLoginBtn = document.querySelector("#btnsignin");

  buttonLoginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    loginEmail();
   
  });
  //buttonLogin.addEventListener("click", showLogin);
}


function loginEmail() {
  let valid = false;
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  const message = document.querySelector(".message");
  message.innerHTML = "";

  if (email == "" || password =="") {
    message.innerHTML = "Por favor llene todos los campos";
  } else {
    logInWithEmail(email, password)
    .then((userCredential) => {
      if (userCredential.user.displayName===null){
        sessionStorage.setItem("userName");
      }else{
        sessionStorage.setItem('userName', userCredential.user.displayName);
      }
      sessionStorage.setItem("userEmail",userCredential.user.email);
      sessionStorage.setItem('userId',userCredential.user.id);
      window.localtion.hashas="#/home";
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
  }
}
export const logInWithGoogleClick = () => {
  const message = document.querySelector(".message");
  message.innerHTML = "";
  logInWithGoogle()
    .then(() => {
      const user = firebase.auth().currentUser;
      if (user != null) {
        window.location.hash = '#/home';
        message.innerHTML = '';
      }
    })
    .catch((error) => {
      // Manejar errores aquí.
      message = error.code;
      message = error.message;
      // El correo electrónico de la cuenta del usuario utilizada.
      message = error.email;
    });
};