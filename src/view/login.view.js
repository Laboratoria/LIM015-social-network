import { login } from "../security/security.function.js";
import {
  logInWithEmail,
  logInWithGoogle,
} from "../security/security.function.js";

export function viewLogin() {
  const viewLogin = 
  `<form class="contenedorLogin">
  <figure class="figure-login">
      <img src="./img/fondoLogin.png" id="fondoLogin1" class="fondo-Login1" >
    </figure>
  
  <section class="frmLogin">
      <figure class="figure-title-login">
        <img src="img/pet.jpg" id="fondoPet" class="fondoAnimalPet">
      </figure>  
      <input id="email" placeholder="Email" class="btn-texto">
      <input class="btn-texto" type="password" name="password" id="password" placeholder="Password">
      <button id="btnsignin" class="btn-signin">signin</button> 
      <span class="message"></span> 
    <span class="txt">You can also enter with</span>
    <figure class="figure-google">
      <img src="img/gmail.png" alt="iGoogle" class="logoGmail" id="btnGoogle">
    </figure>    
    
    <span class="txt">¿You do not have an account?</span>
      <button id="registro" class="btn-register" ><a href="#/register"class="a-login-signup">register</a></button>
  </section>
</form>`;
  const divElem = document.createElement("div");
  divElem.innerHTML = viewLogin;
  return divElem;
}
//inicio de sesion con email
document.addEventListener("click", (e) => {
  if (e.target.id === "btnsignin") {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const message = document.querySelector(".message");
    message.innerHTML = "";
    e.preventDefault();
    e.stopPropagation();
    console.log(btnsignin);
    if (email == "" || password == "") {
      message.innerHTML = "Por favor llene todos los campos";
    } else{
        logInWithEmail(email, password).then(() => {
         // const hash = "#/home";
          //si el correo esta verificado ingresa a la pagina home
          window.location.hash ="#/home";
        });
        
      }
      
    }
  }
);

//inicio de sesion con google
export function initLogin() {
  const buttonLogin = document.querySelector("#btnGoogle");

  buttonLogin.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    showLogin();
    logInWithGoogleClick();
  });
}

async function showLogin() {
  try {
    await login();
  } catch (error) {
    console.log(error);
  }
}

export const logInWithGoogleClick = () => {
  const message = document.querySelector(".message");
  message.innerHTML = "";
  logInWithGoogle()
    .then(() => {
      const user = firebase.auth().currentUser;
      if (user != null) {
        window.location.hash = "#/home";
        message.innerHTML = "";
      }
    })
    .catch((error) => {
      // Manejar errores aquí.
      console.log("error" + error);
      // El correo electrónico de la cuenta del usuario utilizada.
    });
};
