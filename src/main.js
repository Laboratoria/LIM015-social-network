import { routes } from './lib/router.js';

// al recargar la pagina agrega el html
// const root = document.querySelector('#root');
const pathName = window.location.pathname;
const pathNameNoSlash = pathName.replace('/', '') || 'login';

const inicialize = () => {
  routes[pathNameNoSlash]();
};
inicialize();
