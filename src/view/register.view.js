import {
  emailVerication,
  registerWithEmail,
} from "../security/security.function.js";

export function viewRegister() {
  const viewRegister = `
  <form class="container-Register">
    <figure>
      <img src="./img/parque.png" id="fondoRegister1" class="fondoAnimal1">
    </figure>
    <section class="frmregister">
    <figure class="figure-Register">
        <img src="img/pet.jpg" id="fondoPet" class="fondoAnimalPet">
        </figure>
        <input  id="email1" placeholder="Email" class="btn-texto">
      <span id="errorEmail" class="errorMessage"></span>
        <input class="btn-texto" type="password" name="password1" id="password1" placeholder="Password">
        <input class="btn-texto" type="password" name="password2" id="password2" placeholder="Confir Password">   
        <button id="btnRegister"type="button" class="btn">Register</button>
      <span class="message"></span>  
        <button id="login"class="btn"> <a href="#/login">Login</a></button>
    </section>
  </form>
 `;

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
  const email = document.querySelector(".btn-texto").value;
  const password = document.querySelector(".btn-texto").value;
  const confirmPassword = document.querySelector("#password2").value;
  const message = document.querySelector(".message");
  message.innerHTML = "";

  if (email == "" || password == "" || confirmPassword == "") {
    message.innerHTML = "Por favor llene todos los campos";
  } else if (password != confirmPassword) {
    message.innerHTML = "Las contraseñas deben coincidir";
  } else {
    registerWithEmail(email, password)
      .then((response) => {
        console.log(response);
        clean();
        emailVerication();
        sessionStorage.setItem("nameRegister", email);
        window.location.hash = "#/LogIn";
        window.alert("mensaje de verificacion enviado");
      })
      .catch((err) => {
        console.log(err);
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
