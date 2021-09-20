import {
  emailVerication,
  registerWithEmail,
} from "../security/security.function.js";

export function viewRegister() {
  const viewRegister = `
  <form class="registerInfo">
      <h1>Pets-Lovers</h1>
      <h2>Welcome to Pet-Lovers</h2>
      <div class="register">
      <div id="imgRegister">
            <img src="img/animalesFondo.jpg" id="fondo" class="fondoAnimal">
      </div>
      <div id="infoRegister"> 
      <div id="registerInformation2">
        <input type= "text" id="email1" placeholder="Email" class="email">
        <span id="errorEmail" class="errorMessage"></span>
      </div>
      <div id="registerInformation3">
        <input class="password" type="password" name="password1" id="password1" placeholder="Password">
      </div>
      <div id="registerInformation4">
        <input class="password" type="password" name="password2" id="password2" placeholder="Confir Password">
      </div>
      <div id="regbtn">
        <button id="btnRegister"type="button" class="btn">Register</button>
      </div>
      </div> 
      <span class="message"></span>
      <a href="#/login">Login</a>
    </form> `;

  const divElem = document.createElement("div");
  divElem.innerHTML = viewRegister;
  return divElem;
}

export function initRegister() {
  const btnRegister = document.getElementById("btnRegister");
  btnRegister.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    registrar();

  });
}

function clean() {
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");
  const confirmPassword = document.querySelector("#password2");

  email.innerHTML = "";
  password.innerHTML = "";
  confirmPassword.innerHTML = "";
}

function registrar() {
  if (!validate()) {
    return;
  }
}
//validacion register
function validate() {
 
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  const confirmPassword = document.querySelector("#password2").value;
  const message = document.querySelector(".message");
  message.innerHTML = "";

  if (email == "" || password == "" || confirmPassword == "") {
    message.innerHTML = "Por favor llene todos los campos";
  } else if (password != confirmPassword) {
    message.innerHTML = "Las contraseñas deben coincidir";
  } else {
    registerWithEmail(email, password)
      .then(() => {
        clean();
        emailVerication();
        sessionStorage.setItem("nameRegister", email);
        window.location.hash = "#/LogIn";
        window.alert("mensaje de verificacion enviado");
      })
      .catch((err) => {
        clean();
        const errorCode = err.code;
        if (errorCode === "auth/email-already-in-use") {
          message.innerHTML = "El correo electrónico ya está registrado";
        } else if (errorCode === "auth/invalid-email") {
          message.innerHTML = "Correo electrónico no válido";
        } else if (errorCode === "auth/weak-password") {
          message.innerHTML = "La contraseña debe contener mínimo 6 carácteres";
        }
      });
  }
}
