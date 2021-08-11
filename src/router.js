import { components } from './views/components.js';

const changeView = (route) => {
  const main = document.querySelector('.views'); // este main es para las vistas
  main.innerHTML = '';
  switch (route) {
    case '#/home': return main.appendChild(components.home());
    default:
      break;
  }
  return main;
};
export { changeView };
