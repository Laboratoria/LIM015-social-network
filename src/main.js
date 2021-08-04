// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
myFunction();

// Etiquetas globales traidas del body html
const headerTag = document.getElementById('header');
const contentPrincipal = document.getElementById('content');
const footerTag = document.getElementById('footer');

// Seccion de login
const formSection = document.createElement('form');
contentPrincipal.appendChild(formSection);
const emailTag = `<div>
<input type='email' id='email' class='inputLogin' placeholder='Email' required/>
</div>`;
const inputPassword = `<div>
<input type='password' id='pass' class='inputLogin' placeholder='Password' required/>
</div>`;
const buttonSubmit = `<div>
<button type="submit" class='buttonLogin'>Submit</button>
</div>`;
formSection.innerHTML = `${emailTag}${inputPassword}${buttonSubmit}`;
// ACCION DEL LOGIN
formSection.addEventListener('submit', (e) => {
  e.preventDefault();
  const userEmail = document.getElementById('email').value;
  const userPass = document.getElementById('pass').value;
  // console.log(userEmail, userPass);
});
