import { changeViews } from './routes/router.js';
// Este es el punto de entrada de tu aplicacion
const init = () => {
  changeViews(window.location.hash);
  // window.location.hash = '#/';
  window.addEventListener('hashchange', () => {
    changeViews(window.location.hash);
  });
};

window.addEventListener('load', init);
