/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import { signOutUser, onAuthStateChanged } from '../firebase/firebase-functions.js';
import { postCollection, getCollection } from '../firebase/firebase-firestore.js';

const userStateCheck = () => {
  onAuthStateChanged((user) => {
    if (user !== null && user.emailVerified) {
      window.location.hash = '#/onlycats';
    } else if (user === null) {
      window.location.hash = '';
      alert('No iniciaste sesión');
    }
  });
};

export const pageOnlyCats = () => {
  userStateCheck();
  const googleUser = JSON.parse(localStorage.getItem('user'));
  /* const photo = googleUser.photoURL; */
  const pageOcView = `
  <div class="page-container">
    <header class = "header-container">
      <img src="./img/only-cats.png" "alt='only-cats' class="page-title">
    </header>

    <main class ="background-posts">

        <section class="profile-post">
          <div class="container-photo">
              <img src="" "alt='picture' class="profile-photo">
          </div>
          <section class="section-profile" >
            <textarea class="text-input" id="text-input"></textarea>
            <div>
              <button class="post-button" id="post-button" type="submit">Publicar</button>
            </div>
          </section>
        </section>

      <article class ="white-container" >
        <section class="scroll-container" id="other-post"></section>
      <article>

    </main>
    <aside>
      <button class="sign-out"> salir</button>
    </aside>

  </div>`;
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = pageOcView;

  const btnPublish = sectionElement.querySelector('#post-button');
  const textInput = sectionElement.querySelector('#text-input');
  // -------- Crear Posts (C) --------

    const userName = googleUser.displayName;
    const post = textInput.value;

    postCollection(post, userName)
      .then(() => {
        textInput.value = ' ';
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  // -------- Leer Posts (R) --------
  const readPosts = () => {
    getCollection().onSnapshot((querySnapshot) => {
      const newPost = sectionElement.querySelector('#other-post');
      newPost.innerHTML = ' ';
      querySnapshot.forEach((doc) => {
        const dataContent = doc.data();
        newPost.innerHTML += `
        <section class="container-post">
          <div class="container-photo">
            <img src="${dataContent.photo}" "alt='picture' class="profile-photo">
          </div>
          <section class="section-post">
            <p class="name-input"> ${dataContent.user} </p>
            <p readonly class="text-output">${dataContent.text}</p>
          </section>
        </section> `;
      });
    });
  };

  btnPublish.addEventListener('click', createPost);
  readPosts();

  // ------------------ Salir de la página --------------------
  const signOut = sectionElement.querySelector('.sign-out');
  signOut.addEventListener('click', (e) => {
    e.preventDefault();
    const result = confirm('¿En serio quieres salir?');
    if (result) {
      signOutUser()
        .then(() => {
          window.location.hash = '';
          window.localStorage.clear();
        });
    } else {
      signOutUser()
        .catch((error) => (error));
    }  
    return sectionElement;
  });

};
