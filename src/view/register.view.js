export function viewRegister() {
  const viewRegister = 
  `
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

export function initRegister(){
  const btnRegister=document.getElementById("btnRegister");
  btnRegister.addEventListener('click', registrar);
}

function clean(){
  //limpio los componentes
}

function registrar() {
  if(!validate()){
    return;
  }

registerWithEmail(emailRegister, passwordRegister)
.then(() => {
  emailVerication();
  window.alert("mensaje de verificacion enviado");
  localStorage.setItem("nameRegister", nameUser);
  window.location.hash = "#/LogIn";
})
.catch((err) => {
  const errorCode = err.code;
  if (errorCode === "auth/email-already-in-use") {
    errorEmail.innerHTML = "El correo electrónico ya está registrado";
  } else if (errorCode === "auth/invalid-email") {
    errorEmail.innerHTML = "Correo electrónico no válido";
  } else if (errorCode === "auth/weak-password") {
    errorPassword.innerHTML =
      "La contraseña debe contener mínimo 6 carácteres";
  }
});
}

function validate() {
let valid = false;
const message = document.querySelector(".message");

if (email=="" || password=="" || confirmPassword === "") {
message.innerHTML = "Por favor llene todos los campos";
} else if (password != confirmPassword) {
message.innerHTML = "Las contraseñas deben coincidir";
/*errorConfirmPassword.innerHTML = messages;
errorGeneral.innerHTML = "";
errorPassword.innerHTML = "";
errorEmail.innerHTML = "";*/
} else {

}

}

//const registerButton = document.addEventListener("#btnRegister").value;
