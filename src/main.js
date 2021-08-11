/* eslint-disable spaced-comment */
// Este es el punto de entrada de tu aplicacion
import { changePages } from './routes/router.js';
import { logueo, loginWithFacebook } from './pages/login.js';
import { register } from './pages/signIn.js';

const init = () => {
  changePages(window.location.hash);
  logueo();
  register();
  loginWithFacebook();
  window.addEventListener('hashchange', () => {
    logueo();
    register();
    loginWithFacebook();
    changePages(window.location.hash);
  });
};

window.addEventListener('load', init);
