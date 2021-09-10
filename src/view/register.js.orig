import { auth } from '../firebase/fb-config.js'
const viewRegister =()=>{

    const htmlRegister=
    `
    <div class="viewDesktop">
    <img class="viewDesktop__logo"  src="./img/logoMobilPrueba.jpg" alt="Makipura">
    <img class="viewDesktop__woman"  src="./img/woman.png" alt="Makipura">
    </div>

    <div class="register">

      <div class= "logo">
        <img class="logo__img"src="./img/logoMobilPrueba.jpg"  width="150" alt="Makipura">
      </div>

      <div class="login__Subtitle"> 
        <h2  class="register__h2">¡Estas a un paso de unirte a la red de emprendedoras más grande del Perú! </h2>
      </div>

      <div class="register__title">
        <h1 class="register__h1">REGISTRATE</h1>
      </div>

      <form class="form form--register" id="loginForm-signup" action="">
        <div class="form--register__inputList">
          <div class="form--register__item">
            <label type="" for="nameRegister" class="form--register__label">Nombre</label>
            <input type="text" class="form__input" id="nameRegister" value placeholder="Nombre">
          </div>
          <div class="inputList-item">
            <label type="" for="emailRegister" class="form--register__label">Email</label>
            <input type="text"  class="form__input" id="emailRegister" value placeholder="Ingrese su correo electrónico">
          </div>           
          <div class="inputList-item">
            <label for="passwordRegister" class="form--register__label">Contraseña</label>
            <input type="password"  class="form__input" id="passwordRegister" value placeholder="Contraseña de más de 8 caracteres" autocomplete="off">
          </div>
          <div class="inputList-item">
            <label type="" for="passwordConfirmRegister" class="form--register__label">Confirmar contraseña</label>
            <input type="password"  class="form__input" id="passwordConfirmRegister" value placeholder="Confirmar contraseña" autocomplete="off">
          </div>
        </div>
        <div class="signup-button">
           <button class="button button--main" id="mainbuttonSignup"type="submit">Crear cuenta</button>
        </div>
        <div class="signup-separator">ó</div>
        <div class="signup-social">
           <button class="button button--second" id="buttonGoogleSignup" type="submit">Registrate con Google</button>
        </div>
      </form>

      <div class="backArrow" id="backArrowLogin">
        <a href="/#"><i><i class="far fa-arrow-alt-circle-left"></i>
        </a> 
      </div>
    </div>`;
 
  const sectionRegister=document.createElement('section');
  sectionRegister.classList.add("registerSection");

  sectionRegister.innerHTML=htmlRegister;
  // signup register
    const signupForm = sectionRegister.querySelector('#loginForm-signup');
    // console.log(signupForm);
    signupForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      
      const nameUser = document.querySelector('#nameRegister').value;
      const email = document.querySelector('#emailRegister').value;
      const password = document.querySelector('#passwordRegister').value;
      const passwordConfirm = document.querySelector('#passwordConfirmRegister').value
      console.log(email, password, nameUser, passwordConfirm);


      auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        //clear form
        signupForm.reset();
        console.log('guardando signup')
        window.open('#','_self')
        
      })
    });

    const buttonGoogleSignup = sectionRegister.querySelector('#buttonGoogleSignup');
    buttonGoogleSignup.addEventListener('click' , () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      console.log(provider)
      auth.signInWithPopup(provider)
      .then(result => {
        console.log('signin with google');
        window.open('#/home','_self')
      })
      .catch(error => {
        console.log(error)
      })
      console.log('click google')
    });
  
  
    return sectionRegister;
  
}



export  {viewRegister}

