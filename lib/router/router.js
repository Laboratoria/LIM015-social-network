import { components } from '../components/components.js';

const main = document.querySelector('#main');

export const changeViews = () => {
  main.appendChild(components.login());
  main.appendChild(components.signUp());
};
