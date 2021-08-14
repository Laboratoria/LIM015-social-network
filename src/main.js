import { routes } from './lib/router.js';

// const root = document.querySelector('#root');
const pathName = window.location.pathname;
const pathNameNoSlash = pathName.replace('/', '') || 'login';
export const inicialize = () => {
  routes[pathNameNoSlash]();
};
inicialize();
