import { signUpUser } from '../views-controllers/signup-control.js';

export default () => {
  const sectionElem = document.createElement('section');
  const template = `
  <section id="contenedorView1" class="contenedorView1">
    <input type="text" class="registro" id="nombres" placeholder=" Ingresar Nombres" required>
    <input type="text" class="registro" id="apellidos" placeholder=" Ingresar Apellidos" required>
    <input type="email" class="registro" id="email" placeholder=" Ingresar Correo Electronico" required>
    <input type="password" class="registro" id="password" placeholder=" Ingresar Contraseña" required>
    <input type="submit" href="#/" class="registro" id="signUp" value="Registrar">
  </section>
  `;

  sectionElem.innerHTML = template;

  const btnSignUp = sectionElem.querySelector('#signUp');
  btnSignUp.addEventListener('click', signUpUser);
  return sectionElem;
};
