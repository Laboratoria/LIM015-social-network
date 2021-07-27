import { conponents } from '../views/index.js';

export const changeViews = (route) => {
  const container = document.getElementById('contenedorView1');
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
