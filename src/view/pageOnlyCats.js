/* eslint-disable no-alert */
import { signOutUser } from '../firebase/firebase-functions.js';

export const pageOnlyCats = () => {
  const pageOcView = `
  <div class="page-container">
    <header class = "header-container">
      <img src="./img/only-cats.png" "alt='only-cats' class="home-title">
    </header>
    <aside class="labels-container">
      <div>Meme</div>
      <div>Meme</div>
      <div>Meme</div>
    </aside>
    <main class="posts-container">
      <article>
        <div>image</div>
        <div>Nombre de la imagen</div>
        <textarea class="text-input"></textarea>
        <div class="published-text"></div>
        <button class="post-button">Publicar</button>
      </article>
      <article>bla bla bla</article>
    </main>
    <aside >
     
        <button class="sign-out"> salir</button>
     
    </aside>
    <h2> Bienvenidx a OnlyCats </h2> <br>
   
  </div>`;
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = pageOcView;
  const signOut = sectionElement.querySelector('.sign-out');
  signOut.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser()
      .then(() => {
        // eslint-disable-next-line no-restricted-globals
        confirm('¿En serio quieres salir?');
        window.location.hash = '#/';
      }).catch((error) => (error));
  });
  return sectionElement;
};
