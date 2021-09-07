import { changeView } from './router.js';

export const vistas = () => {
  document.querySelector('.container').style.display = 'none'; // oculto el main que contiene el login
  document.getElementById('header').style.display = 'flex'; // acá muestro el header con el navbar
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
};
