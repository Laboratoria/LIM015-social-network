/* eslint-disable no-console */
// Este es el punto de entrada de tu aplicacion
import { changeView } from './view-controler/router.js';
import { firebaseConfig } from './firebase/firebase-config.js';

firebase.initializeApp(firebaseConfig);
const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
