// Este es el punto de entrada de tu aplicacion
import { changePages } from './routes/router.js';

const init = () => {
  changePages(window.location.hash);
  window.addEventListener('hashchange', () => {
    changePages(window.location.hash);
  });
};

window.addEventListener('load', init);
