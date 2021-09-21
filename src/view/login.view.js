import { login } from "../security/security.function.js";
import {
  logInWithEmail,
  logInWithGoogle,
} from "../security/security.function.js";

export function viewLogin() {
  const viewLogin = `
  <form class="contenedorLogin">
    <div class="login">
    <div id="imgLogin">
          <img src="img/pet.jpg" id="fondoPet" class="fondoAnimalPet">
          </div>
          <div id="info">
      <input id="email" placeholder="Email" class="email">
      </div>
      <div id="information">
      <input class="password" type="password" name="password" id="password" placeholder="Password">
      </div>
      <div id="btnlogin">
      <button id="btnsignin" class="btn">signin</button>  
      </div>
      </div>
    <p>You can also enter with</p>
    <div id="btnGoogleLogin">
     <button id="btnGoogle">
     <img src="img/gmail.png" alt="iGoogle" class="logoGmail" id="logoGmail">
     </button> 
    </div>
    
    <span class="message"></span>
    <p>¿You do not have an account?<a href="#/register">register</a></p>
    </div>
    </form>`;
  const divElem = document.createElement("div");
  divElem.innerHTML = viewLogin;
  return divElem;
}
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

export function initLogin() {
  //btnsign
  //const btnsignin=document.getElementById("btnsignin");

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

// document.addEventListener('click', (e) => {
//   if (e.target.id === 'btnsignin') {
//    const email = document.querySelector('#email').value;
//    const password = document.querySelector('#password').value;
//    e.preventDefault();
//    e.stopPropagation();
//    console.log(btnsignin);
//    logInWithEmail(email, password)
//    .then((usuario) => {
//      const hash= '#/home';
//      //si el correo esta verificado ingresa a la pagina home
//        if (email == "" || password == "")
//        {
//            message.innerHTML = "Por favor llene todos los campos";
//          }
//          else
//          {
//              if (usuario.user.emailVerified)
//              {
//                  window.location.hash = hash;
//              }
//          }
//      }
//    )}
// });

// export function initLoginBtn() {
//   const btnSignin = document.querySelector("#btnsignin");
//   btnSignin.addEventListener("click", function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log(btnSignin);
//     //validatelogin();
//     loginEmail();
//   });
//   //buttonLogin.addEventListener("click", showLogin);
// }
//aqui D
// function validatelogin(){
//   if(!loginEmail()) {
//     return;
//   }
// }
//validacion login
function loginEmail() {
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  const message = document.querySelector(".message");
  message.innerHTML = "";

  if (email == "" || password == "") {
    message.innerHTML = "Por favor llene todos los campos";
  } else {
    logInWithEmail(email, password)
      .then((userCredential) => {
        if (userCredential.user.displayName === null) {
          sessionStorage.setItem("userName");
          window.localtion.hashas = "#/home";
        } else {
          sessionStorage.setItem("userName", userCredential.user.displayName);
          sessionStorage.setItem("userEmail", userCredential.user.email);
          sessionStorage.setItem("userId", userCredential.user.id);
        }
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
        window.location.hash = "#/home";
        message.innerHTML = "";
      }
    })
    .catch((error) => {
      // Manejar errores aquí.
      console.log("error" + error);
      // El correo electrónico de la cuenta del usuario utilizada.
      message = error.email;
    });
};
