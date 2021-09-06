import { auth } from '../firebase/fb-config.js'
const viewRegister =()=>{

    const htmlRegister=
    `    <div class="registerArea">
    <div class="formContainer">
      <div class= "formContainer-logo">
      <a href="/#" class="logoLink" title="makipura">
      <img src="../img/logosf.png" alt="Makipura">
      </a>
      </div>
      <div class="formContainer-speech"> 
        <h3>¡Estas a un paso de unirte a la red de emprendedoras más grande del Perú! </h3>
      </div>
      <div class="loginForm-title">
        <h1>REGISTRATE</h1>
      </div>
      <form class="loginForm-signup" id="loginForm-signup" action="">
        <div class="signup-inputList">
          <div class="inputList-item">
            <label type="" for="nameRegister" class="">Nombre</label>
            <input type="text" id="nameRegister" value placeholder="Nombre">
          </div>
          <div class="inputList-item">
            <label type="" for="emailRegister" class="">Email</label>
            <input type="text" id="emailRegister" value placeholder="Ingrese su correo electrónico">
          </div>           
          <div class="inputList-item">
            <label for="passwordRegister" class="">Contraseña</label>
            <input type="password" id="passwordRegister" value placeholder="Contraseña de más de 8 caracteres" autocomplete="off">
          </div>
          <div class="inputList-item">
            <label type="" for="passwordConfirmRegister" class="">Confirmar contraseña</label>
            <input type="password" id="passwordConfirmRegister" value placeholder="Confirmar contraseña" autocomplete="off">
          </div>
        </div>
        <div class="signup-button">
           <button class="mainButton" id="mainbuttonSignup"type="submit">Crear cuenta</button>
        </div>
        <div class="signup-separator">ó</div>
        <div class="signup-social">
           <button class="secondButton" id="buttonGoogleSignup" type="submit">Registrate con Google</button>
        </div>
      </form>
      <div class="backArrow" id="backArrowLogin">
        <a href="/#"><i>regresar(icono flecha)</i></a> 
      </div>
    </div>
  </div>`;
    
  const divRegister=document.createElement('div');
  divRegister.innerHTML=htmlRegister;
  // signup register
    const signupForm = divRegister.querySelector('#loginForm-signup');
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

  
  

  
    return divRegister;
};











export  {viewRegister}


//const entrar=addEventListene


