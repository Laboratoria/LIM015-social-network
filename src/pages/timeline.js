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
  <div>
    <textarea name="publication" id="publication" placeholder="¿Qué deseas compartir con la comunidad de viajeros?" cols="30" rows="10"></textarea>
  </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
