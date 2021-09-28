import { viewHome, initHome } from '../view/home.view.js';
import { viewLogin, initLogin } from '../view/login.view.js';
import { viewRegister, initRegister } from '../view/register.view.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/login': {
      container.appendChild(viewLogin());
      initLogin();
      break;
    }
    case '#/register': {
      container.appendChild(viewRegister());
      initRegister();
      break;
    }
    case '#/home': {
      container.appendChild(viewHome());
      initHome();
      break;
    }
    default:
      container.appendChild(viewLogin());
      initLogin();
  }
};

export { changeView };
