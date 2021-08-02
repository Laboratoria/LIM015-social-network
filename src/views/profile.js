export default () => {
  const sectionProfile = document.createElement('section');

  const template = `
    <section id="contenedorView2" class="contenedorView2">
    <input type="text" class="registro" id="nombres" placeholder=" Ingresar Nombres">
    <input type="text" class="registro" id="apellidos" placeholder=" Ingresar Apellidos">
    <input type="email" class="registro" id="email" placeholder=" Ingresar Correo Electronico">
    <input type="password" class="registro" id="password" placeholder=" Ingresar Contraseña">
    <input type="password" class="registro" id="password" placeholder=" Verificar Contraseña">
    <input type="submit" href="#/home" class="registro" value="Guardar cambios">
    </section>
  `;

  sectionProfile.innerHTML = template;
  sectionProfile.setAttribute('class', 'contenedorView1');

  return sectionProfile;
};


import { currentUser } from '../model/model-firebase.js';

export const viewProfile = () => {
  const profileContainer = document.createElement('div');
  profileContainer.innerHTML = '';
  const profileTemplate = `
    <form class="form-profile">
      <img class="img-profile" src='${currentUser().photoURL}'/>
      <label class="name-profile" id="nombre">${currentUser().displayName}</label>
      <!--<label class="name-self">Email:</label>-->
      <label class="label-profile">${currentUser().email}</label>
    </form>
    `;
  profileContainer.innerHTML = profileTemplate;
  profileContainer.classList.add('container-profile');
  return profileContainer;
};
