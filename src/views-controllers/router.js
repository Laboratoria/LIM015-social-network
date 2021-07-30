import { conponents } from '../views/index.js';

const changeViews = (route) => {
  const container = document.getElementById('contenedor');
  container.innerHTML = '';

  switch (route) {
    case '':
    case '#/':
      container.appendChild(conponents.signin());
      break;

    case '#/signup':
      container.appendChild(conponents.signup());
      break;

    case '#/home':
      container.appendChild(conponents.home());
      break;

    case '#/profile':
      container.appendChild(conponents.profile());
      break;

    default:
      container.appendChild(conponents.error());
      break;
  }
};

const changeView = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return changeViews('#/');
  }
  return changeViews(hash);
};

export const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
