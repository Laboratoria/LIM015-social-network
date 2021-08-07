// Este es el punto de entrada de tu aplicacion
// import {  } from './pages/login.js';

// Etiquetas globales traidas del body html
const contentPrincipal = document.getElementById('content');

const init = () => {
  console.log(window.location.hash);
  window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
  });
};

window.addEventListener('load', init);
