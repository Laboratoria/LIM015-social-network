/* eslint-disable no-unused-vars */
import { logout } from '../security/security.function.js';

export function viewHome() {
  const viewHomen = `
      <div class ='home'>
            <img src ='img/home.jpg' id='home1' class ='homeAnimal'>
       <div id ='exit'>
       <button id ='btnExit'>Logout</button>
      </div>`;
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
