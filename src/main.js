/* eslint-disable spaced-comment */
// Este es el punto de entrada de tu aplicacion
import { changePages } from './routes/router.js';
import { logueo } from './pages/login.js';
import { register } from './pages/signIn.js';

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
