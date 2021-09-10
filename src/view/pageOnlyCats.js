import { signOutUser } from '../firebase/firebase-functions.js';

export const pageOnlyCats = () => {
  const pageOcView = `
  <div class="home-container">
    <header>
      <img src="./img/only-cats.png" "alt='only-cats' class="home-img">
    </header>
    <aside>
      <div>Meme</div>
      <div>Meme</div>
      <div>Meme</div>
    </aside>
    <main>
      <div>texto publicaion</div>
      <div>texto publicaion mas respuesta</div>
    </main>
    <aside>
      <div class="container">
        <button class="sign-out"> salir</button>
      </div>
    </aside>
    <h2> Bienvenidx a OnlyCats </h2> <br>
      <img src='https://cdn.memegenerator.es/descargar/15315146' width=230px>
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
        console.log('saliste');
      }).catch((error) => {
        console.log(error);
      });
  });
  return sectionElement;
};
