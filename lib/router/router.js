import { components } from '../components/components.js';
import { formValidation } from '../components/validation.js';

const main = document.querySelector('#main');

export const changeViews = () => {
  main.innerHTML = '';
  switch (window.location.hash.toLowerCase()) {
    case '#/login':
      main.appendChild(components.login());
      formValidation();
      break;
    case '#/signup':
      main.appendChild(components.signUp());
      formValidation();
      break;
    default:
      main.appendChild(components.login());
      formValidation();
  }
};
