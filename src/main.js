/* eslint-disable no-console */
// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const init = () => {
  window.addEventListener('hashchange', () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    console.log(window.location.hash));
};

window.addEventListener('load', init);
