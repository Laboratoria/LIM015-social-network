// import firebase from '../firebase/firebase.js';
import { logOutUser } from '../firebase/firebase-auth.js';
import {
  addPostCollection, getPosts, onGetPosts,
  deletePost, updatePost
} from '../firebase/firebase-firestore.js';

// Constante a exportar
export const TIMELINE = () => {
  const view = `
  <section>
    <figure>
      <img id='imgUser' src="../images//photoProfile2.jpeg" alt="photoProfile" />
    </figure>
    <p id='nameProfile'>Luana Cevallos</p>
    <p id='status'>Estado: Viajera Empedernida</p>
  </section>
  <div class='publication'>
    <textarea name='publication' id='textAreaPublication' class='textAreaPublication' placeholder='¿Qué deseas compartir con la comunidad de viajeros?' rows='3'></textarea>
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
  const btnImg = divElement.querySelector('#buttonImg');
  const linkAboutLogOut = document.querySelector('.logOut a');
  // INPUTS GENERALES
  const textPost = divElement.querySelector('#textAreaPublication');
  const userNamePost = divElement.querySelector('#userNamePost');
  const postContent = divElement.querySelector('#posts');
  const imgElement = divElement.querySelector('#imgUser');
  // FUNCIONALIDAD
  // ------------------------- Boton compartir -------------------------
  btnShare.addEventListener('click', () => {
    if (textPost.value === '') {
      console.log('publicacion vacia');
    } else {
    // aqui va lo de firestore
      addPostCollection('', '', textPost.value).then((promise) => {
        const idCollection = promise.id;
        const pathCollection = promise.path;
        console.log(idCollection, pathCollection);
        textPost.value = '';
      });
    }
  });
  // ------------------------- Ejecutarse cuando se actualice la pagina -------------------------
  onGetPosts(() => {
    postContent.innerHTML = '';
    getPosts().then((docRef) => {
      docRef.forEach((docAboutCollection) => {
        const idPost = docAboutCollection.ref.id;
        const existPost = docAboutCollection.exists;
        const pathPost = docAboutCollection.ref.path;
        const postInfo = docAboutCollection.data();
        console.log(docAboutCollection);
        console.log(idPost, existPost, pathPost);
        console.log(docAboutCollection);
        console.log(postInfo);
        console.log(postInfo.post);
        postContent.innerHTML += `<div class='postMessage'>
          <div>
            <p>Publicado por<span id='userNamePost'></span></p>
            <button id='${idPost}' class='btnDelete'>CLOSE</button>
          </div>
          <div class='postContent'>${postInfo.post}</div>
          <div id='reactionPost'>
            <button id='${idPost}' class='btnLike'>LIKE</button>
            <button id='${idPost}' class='btnEdit'>EDIT</button>
          </div>
        </div>`;
      });
    })
      .catch((error) => {
        console.log(error);
      });
  });
  // ------------------------- Boton Delete -------------------------
  divElement.addEventListener('click', async (e) => {
    if (e.target.className === 'btnDelete') {
      // await console.log(e.target.id);
      await deletePost(e.target.id);
    };
  });
  // ------------------------- Boton Edit ------------------------- PENDIENTE
  divElement.addEventListener('click', async (e) => {
    if (e.target.className === 'btnEdit') {
      await updatePost(e.target.id, textPost.value);
    };
  });
  // ------------------------- Ancla salir -------------------------
  linkAboutLogOut.addEventListener('click', (e) => {
    e.preventDefault();
    logOutUser().then(() => {
      console.log('cierre de sesion exitoso');
      window.location.hash = '#/';
      localStorage.clear();
    });
  });
  return divElement;
};
