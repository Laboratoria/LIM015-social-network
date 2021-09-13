/* eslint-disable no-alert */
import { signOutUser } from '../firebase/firebase-functions.js';

export const pageOnlyCats = () => {
  const pageOcView = `
  <div class="page-container">
    <header class = "header-container">
      <img src="./img/only-cats.png" "alt='only-cats' class="page-title">
    </header>
    <aside class="labels-container">
      <section>
        <div class="container-img-label">
          <img src="./img/gato-comida.jpg" "alt='picture' class="label-page">
        </div>
      </section>
      <section>
        <div class="container-img-label">
          <img src="./img/meme-gato.jpg" "alt='picture' class="label-page">
        </div>
      </section>
      <section>
        <div class="container-img-label">
          <img src="./img/vet-gato.jpg" "alt='picture' class="label-page">
        </div>
      </section>
    </aside>
    <main class="background-posts">
      <article class="profile-post">
        <section class="container-photo">
            <img src="./img/michael.jpg" "alt='picture' class="profile-photo">
        </section>
        <section class="section-post">
          <p class="name-input"> Michael Scott </p>
          <textarea class="text-input"></textarea>
          <div>
            <button class="post-button">Publicar</button>
          </div>
        </section>
      </article>
      
      <article class="other-post">
        <section class="container-photo">
          <img src="./img/michael.jpg" "alt='picture' class="profile-photo">
        </section>
        <section class="section-post">
          <p class="name-input"> Michael Scott </p>
          <div class="text-output">Loakkamdlasm dlsamdiawoas dasdasd sadada asdasdfu</div>
          <div>
            <button class="post-button">like</button>
          </div>
        </section>
      <article>
    </main>
    <aside >
        <button class="sign-out"> salir</button>
    </aside>
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
