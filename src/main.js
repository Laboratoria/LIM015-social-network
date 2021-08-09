/* eslint-disable spaced-comment */
// Este es el punto de entrada de tu aplicacion
import { changePages } from './routes/router.js';
import { logueo, register } from './pages/login.js';

const init = () => {
  changePages(window.location.hash);
  logueo();
  register();
  window.addEventListener('hashchange', () => {
    logueo();
    register();
    changePages(window.location.hash);
  });
};

//window.logueo = logueo;

window.addEventListener('load', init);
