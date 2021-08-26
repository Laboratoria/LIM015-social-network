import { components } from './views/components.js';
import { logout } from './scripts/fs-login.js';
import { firestore } from './scripts/fs-firestore.js';

const changeView = (route) => {
  const main = document.querySelector('.views'); // este main es para las vistas
  main.appendChild(components.community());
  firestore();
  switch (route) {
    case '#/community': main.innerHTML = ''; main.appendChild(components.community()); firestore();
      break;
    case '#/profile': main.innerHTML = ''; main.appendChild(components.profile());
      break;
    case '#/logout': logout();
      break;
    default:
      break;
  }
  return main;
};
export { changeView };
