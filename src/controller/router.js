/* import { navigator } from './view/allTemplate.js';
import { logInTemplate } from './view/login.js';
import { registerTemplate } from './view/register.js';
import { home } from './view/home.js';
import { profile } from './view/profile.js';
import { error } from './view/error404.js';

navigator();
logInTemplate();
registerTemplate();
home();
profile();
error(); */

/* const changeTemplate = (hash) => {
  if (hash === '#' || hash === '' || hash === '#') {
    return allTemplate('#LogOut');
  } else if (hash === '#LogOut' || hash === '#Home' || hash === '#Profile') {
    return allTemplate(hash);
  } else {
    return allTemplate('#LogOut');
  }
}  */

/* export const startRouter = () => {
  window.addEventListener('load', changeTemplate(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTemplate(window.location.hash);
}; */

import { components } from '../view/allTemplate.js';

export const changeView = (route) => {
  const viewRoot = document.querySelector('#root');
  viewRoot.innerHTML = '';
  switch (route) {
    case '#/Home' :
      {return viewRoot.appendChild(components.Home())}
    case '#/Profile' :
      {return viewRoot.appendChild(components.Profile())}
      default :
      { return viewRoot.appendChild(components.LogIn()) }
    break;
  }
  console.log(route);
};
