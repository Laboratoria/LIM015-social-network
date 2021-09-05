
/* eslint-disable no-console */
// Este es el punto de entrada de tu aplicacion
import { changeView } from './view-controler/router.js';
const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
