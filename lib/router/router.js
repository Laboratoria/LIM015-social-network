import { components } from '../components/components.js';

const main = document.querySelector('#main');

export const changeViews = () => {
  main.innerHTML = '';
  switch (window.location.hash.toLowerCase()) {
    case '#/login':
      main.appendChild(components.login());
      break;
    case '#/resetpassword':
      main.appendChild(components.resetPassword());
      break;
    case '#/signup':
      main.appendChild(components.signUp());
      break;
    case '#/home':
      main.appendChild(components.home());
      break;
    default:
      main.appendChild(components.login());
  }
};
