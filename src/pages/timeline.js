/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable padded-blocks */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import firebase from '../lib/firebase.js';

export const timeline = () => {
  const view = `
  <p>Pagina del muro</p>
  




  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
