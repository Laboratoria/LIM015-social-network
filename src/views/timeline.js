import firebase from '../firebase/firebase.js';
import { logOutUser } from '../firebase/firebase-auth.js';
import { addPostCollection } from '../firebase/firebase-firestore.js';
// Constante a exportar
export const TIMELINE = () => {
  const view = `
  <section>
    <figure>
      <img src="../images//photoProfile2.jpeg" alt="photoProfile" />
    </figure>
    <p id='nameProfile'>Luana Cevallos</p>
    <p id='status'>Estado: Viajera Empedernida</p>
  </section>
  <div class='publication'>
    <textarea name='publication' id='textAreaPublication' class='textAreaPublication' placeholder='¿Qué deseas compartir con la comunidad de viajeros?' cols='30' rows='10'></textarea>
    <div class='buttons'>
      <button id='buttonImg' type='button' class='buttonImg'>&#xf009</button>
    </div>
    <div class='buttons'>
      <button id='buttonShare' type='submit' class='buttonShare'>Compartir</button>
    </div>
  </div>
  <section id='posts'>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  // Constantes Globales
  const btnShare = divElement.querySelector('#buttonShare');
  const linkAboutLogOut = document.querySelector('.logOut a');
  // INPUTS GENERALES
  const textPost = divElement.querySelector('#textAreaPublication');
  const userNamePost = divElement.querySelector('#userNamePost');
  const postContent = divElement.querySelector('#posts');
  // FUNCIONALIDAD
  // ------------------------- Boton compartir -------------------------
  btnShare.addEventListener('click', () => {
    if (textPost.value === '') {
      console.log('publicacion vacia');
    } else {
    // aqui va lo de firestore
      const user = {
        dateExample: firebase.firestore.Timestamp.fromDate(new Date()),
        mail: 'estefania_8_3@hotmail.com',
        activo: true,
        post: textPost.value,
      };
      addPostCollection(user, postContent);
    }
  });
  // ------------------------- Ancla salir -------------------------
  linkAboutLogOut.addEventListener('click', (e) => {
    e.preventDefault();
    logOutUser();
  });
  return divElement;
};
