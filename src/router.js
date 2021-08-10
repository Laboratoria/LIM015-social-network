import { components } from './views/components.js';

const changeView = (route) => {
  document.querySelector('.container').style.display = 'none'; // acá oculto el main que contiene el login
  const main = document.querySelector('.views'); // este main es para las vistas
  main.innerHTML = '';
  switch (route) {
    case '#/home': { return main.append(components.home()); }
    default:
      break;
  }
  return main;
};
export { changeView };
