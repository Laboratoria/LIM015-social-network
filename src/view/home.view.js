/* eslint-disable no-unused-vars */
import { logout } from '../security/security.function.js';

export function viewHome() {
  const viewHomen = `
      <div class ='home'>
      <header>
      <img src='img/pet.jpg' id='fondoPet' class='fondoAnimalPet'>
      
      <p>Home</p>
      <figure class='logo1'>
        <img src='img/home3.png' class='logo_home'>
      </figure>
      <p>Profile</p>
        <img src='img/perfil.png' class='logo_home'>
        <p>Logout</p>
        <img src='img/logout.png' id ='btnExit' class='logo_home'>
      </header>
       <div id ='exit'>
      </div>
      <section class="img-perfil">
       </section>
      <section class= "container-post">
      <img class='profile-user-image' src=''>
      <textarea class='post'placeholder='
      Write your post here'rows='10'cols='30'></textarea>
      <button type='button'id='btnpost'>Post</button>
      </section>
      `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHomen;
  return divElem;
}

export function initHome() {
  const btnLogout = document.getElementById('btnExit');
  btnLogout.addEventListener('click', (e) => {
    logout();
    window.location.hash = '#/login';
  });
}
