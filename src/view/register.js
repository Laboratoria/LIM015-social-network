import { registerEmail, loginGoogle } from "../firebase/fb-functions.js";
const viewRegister = () => {
  const htmlRegister = `
  <div class="viewDesktop">
    <img class="viewDesktop__logo" src="./img/logoMobilPrueba.jpg" alt="Makipura">
    <img class="viewDesktop__woman" src="./img/woman.png" alt="Makipura">
  </div>
  <div class="register">
    <div class="logo">
      <img class="logo__img" src="./img/logoMobilPrueba.jpg" width="150" alt="Makipura">
    </div>
    <div class="register__Subtitle">
      <h2 class="register__h2">¡Estas a un paso de unirte a la red de emprendedoras más grande del Perú! </h2>
    </div>
    <div class="register__title">
      <h1 class="register__h1">REGISTRATE</h1>
    </div>
    <form class="form form--register" id="loginForm-signup" action="">
      <div class="form--register__inputList">
        <div class="form--register__item">
          <label for="nameRegister" class="form--register__label">Nombre</label>
          <input type="text" class="form__input" id="nameRegister"  placeholder="Nombre" required>
        </div>
        <div class="inputList-item">
          <label for="emailRegister" class="form--register__label">Email</label>
          <input type="text" class="form__input" id="emailRegister" placeholder="Ingrese su correo electrónico" required>
          <span id="errorEmail"></span>
        </div>
        <div class="inputList-item">
          <label for="passwordRegister" class="form--register__label">Contraseña</label>
          <span class="icon icon--eye icon--eyeR"><i id="checkEyeR" class="fas fa-eye-slash"></i></span>
          <input type="password" class="form__input" id="passwordRegister" placeholder="Contraseña de más de 6 caracteres" autocomplete="off" required>
        </div>
        <span id="statusPasswordMessage"></span>
        <div class="inputList-item">
          <label for="passwordConfirmRegister" class="form--register__label">Confirmar contraseña</label>
          <span class="icon icon--eye icon--repeatEyeR"><i id="checkRepeatEye" class="fas fa-eye-slash"></i></span>
          <input type="password" class="form__input" id="passwordConfirmRegister" placeholder="Confirmar contraseña" autocomplete="off" required>
        </div>
        <span id="statusConfirmPassword"></span>
      </div>
      <div class="signup-button">
        <input class="button button--main" id="mainbuttonSignup" type="submit" value="Crear cuenta">
      </div>
      <div class="form--separator signup-separator">ó</div>
      <div class="signup-social">
        <button class="button button--second" id="buttonGoogleSignup" type="submit">
          <div class="buttton button--second__img"><img class="googleIcon" src="./img/iconoGoogle.png" alt="icono_Google"></div>
          <div class="buttton button--second__text">Ingresar con Google</div> 
        </button>
      </div>
    </form>
    <div class="backArrow" id="backArrowLogin">
      <a href="/#"><i class="far fa-arrow-alt-circle-left"></i></a>
    </div>
  </div>
    `;

  const sectionRegister = document.createElement("section");
  sectionRegister.classList.add("registerSection");

  sectionRegister.innerHTML = htmlRegister;
  // signup register

  const signupForm = sectionRegister.querySelector("#loginForm-signup");
  const passwordRegister = sectionRegister.querySelector("#passwordRegister");
  const passwordConfirmRegister = sectionRegister.querySelector(
    "#passwordConfirmRegister"
  );
  const spanPassword = sectionRegister.querySelector("#statusPasswordMessage");
  const spanErrorEmail = sectionRegister.querySelector("#errorEmail");
  const spanConfirmPassword = sectionRegister.querySelector(
    "#statusConfirmPassword"
  );
  const iconEyeR = sectionRegister.querySelector("#checkEyeR");
  const iconRepeatEyeR = sectionRegister.querySelector("#checkRepeatEye");
  const iconEyeBoxR = sectionRegister.querySelector(".icon--eyeR");
  const iconRepeatEyeBoxR = sectionRegister.querySelector(".icon--repeatEyeR");
  // console.log(signupForm);
  passwordRegister.addEventListener("keyup", () => {
    const requiredPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z\d]).{6,}$/gm;
    console.log(passwordRegister.value);
    if (requiredPassword.test(passwordRegister.value)) {
      spanPassword.classList.add("validateEmail");
      spanPassword.classList.remove("invalidEmail");
      spanPassword.innerHTML = "Contraseña segura";
    } else {
      spanPassword.classList.remove("validateEmail");
      spanPassword.classList.add("invalidEmail");
      spanPassword.innerHTML =
        "La contraseña debe contener mínimo 6 caracteres, una letra mayúscula y un número";
    }
    if (passwordRegister.value == "") {
      spanPassword.classList.remove("validateEmail");
      spanPassword.classList.remove("invalidEmail");
      spanPassword.innerHTML = "";
    }
  });

  iconEyeBoxR.addEventListener("click", () => {
    if (passwordRegister.type === "password") {
      passwordRegister.type = "text";
      iconEyeR.classList.remove("fa-eye-slash");
      iconEyeR.classList.add("fa-eye");
    } else {
      passwordRegister.type = "password";
      iconEyeR.classList.add("fa-eye-slash");
      iconEyeR.classList.remove("fa-eye");
    }
  });

  iconRepeatEyeBoxR.addEventListener("click", () => {
    if (passwordConfirmRegister.type === "password") {
      passwordConfirmRegister.type = "text";
      iconRepeatEyeR.classList.remove("fa-eye-slash");
      iconRepeatEyeR.classList.add("fa-eye");
    } else {
      passwordConfirmRegister.type = "password";
      iconRepeatEyeR.classList.add("fa-eye-slash");
      iconRepeatEyeR.classList.remove("fa-eye");
    }
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (passwordRegister.value === passwordConfirmRegister.value) {
      console.log("contraseñas iguales");
      const email = document.querySelector("#emailRegister").value;
      const password = document.querySelector("#passwordRegister").value;
      registerEmail(email, password)
        .then(() => {
          //clear form
          signupForm.reset();
          console.log("guardando signup");
          window.open("#", "_self");
        })
        .catch(() => {
          spanErrorEmail.classList.add("invalidEmail");
          spanErrorEmail.innerHTML = "Ingrese un correo válido";
        });
    } else {
      spanConfirmPassword.classList.add("invalidEmail");
      spanConfirmPassword.innerHTML = "Las contraseñas deben coincidir";
    }
  });

  passwordConfirmRegister.addEventListener("keyup", () => {
    if (passwordConfirmRegister.value == "") {
      spanConfirmPassword.classList.remove("invalidEmail");
      spanConfirmPassword.innerHTML = "";
    }
  });

  const buttonGoogleSignup = sectionRegister.querySelector(
    "#buttonGoogleSignup"
  );
  buttonGoogleSignup.addEventListener("click", () => {
    loginGoogle()
      .then(() => {
        console.log("signin with google");
        window.open("#/home", "_self");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("click google");
  });

  return sectionRegister;
};

export { viewRegister };
