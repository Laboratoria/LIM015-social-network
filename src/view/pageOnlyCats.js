/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import { signOutUser } from '../firebase/firebase-functions.js';
import { postCollection, getCollection } from '../firebase/firebase-firestore.js';

export const pageOnlyCats = () => {
  const pageOcView = `
  <div class="page-container">
    <header class = "header-container">
      <img src="./img/only-cats.png" "alt='only-cats' class="page-title">
    </header>
    <aside class="labels-container">
      <section>
        <div class="container-img-label">
        </div>
      </section>
      <section>
        <div class="container-img-label">
        </div>
      </section>
      <section>
        <div class="container-img-label">
        </div>
      </section>
    </aside>
    <main class="background-posts">
      <article class="profile-post">
        <section class="container-photo">
            <img src="./img/michael.jpg" "alt='picture' class="profile-photo">
        </section>
        <section class="section-post" >
          <p class="name-input"> Michael Scott </p>
          <textarea class="text-input" id="text-input"></textarea>
          <div>
            <button class="post-button" id="post-button">Publicar</button>
          </div>
        </section>
      </article>
      
      <article class="other-post" id="other-post">
      <article>
    </main>
    <aside >
        <button class="sign-out"> salir</button>
    </aside>
  </div>`;
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = pageOcView;

  const btnPublish = sectionElement.querySelector('#post-button');
  const textInput = sectionElement.querySelector('#text-input');
  // -------- Crear Posts --------
  const writePost = () => {
    textInput.innerHTML = ' ';
    const post = textInput.value;
    postCollection(post)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        sectionElement.querySelector('#text-input').value = ' ';
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  const mostrarPosts = () => getCollection().onSnapshot((collection) => {
    const newPost = sectionElement.querySelector('#other-post');
    collection.forEach((doc) => {
      const dataContent = doc.data().text;
      newPost.innerHTML = ' ';
      newPost.innerHTML += `
        <section class="container-photo">
        <img src="./img/michael.jpg" "alt='picture' class="profile-photo">
      </section>
      <section class="section-post">
        <p class="name-input"> Michael Scott</p>
        <div class="text-output">${dataContent}</div>
        <div>
        </div>
      </section>
      `;
      console.log(dataContent);
    });
  });
  btnPublish.addEventListener('click', () => {
    writePost();
    mostrarPosts();
  });

  // -------- Publicar Posts --------
  /*   const publishPosts = () => {
    getCollection().get().then((querySnapshot) => {
      const newPost = sectionElement.querySelector('#other-post');
      querySnapshot.forEach((doc) => {
        newPost.innerHTML = ' ';
        console.log(`${doc.id} => ${doc.data().text}`);
        newPost.innerHTML += `
        <section class="container-photo">
        <img src="./img/michael.jpg" "alt='picture' class="profile-photo">
      </section>
      <section class="section-post">
        <p class="name-input"> Michael Scott</p>
        <div class="text-output">${doc.data().text}</div>
        <div>
        </div>
      </section>
      `;
      });
    });
  };
  publishPosts();
 */
  const signOut = sectionElement.querySelector('.sign-out');
  signOut.addEventListener('click', (e) => {
    e.preventDefault();
    const result = confirm('¿En serio quieres salir?');
    if (result === true) {
      signOutUser()
        .then(() => {
          window.location.hash = '#/';
        });
    } else {
      signOutUser()
        .catch((error) => (error));
    }
  });

  return sectionElement;
};
