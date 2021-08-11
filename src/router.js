import { components } from './views/components.js';
import { logout } from './scripts/fs-login.js';

const changeView = (route) => {
  const main = document.querySelector('.views'); // este main es para las vistas
  main.innerHTML = '';
  switch (route) {
    case '#/home': main.appendChild(components.home());
      break;
    case '#/logout': logout();
      break;
    default:
      break;
  }
  return main;
};
export { changeView };
