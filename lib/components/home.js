import { onAuthStateChanged, signOut } from '../firebase/functions.js';

const userState = () => {
  onAuthStateChanged((user) => {
    if (user === null || user === undefined) window.location.hash = '#/login';
  });
};

const viewPost = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const post = document.createElement('section');
  post.innerHTML = `
  <section class="postHeader">
    <img class="photoProfile" src="${user.photoURL}"/>
    <div class="postAuthor">
      <h3>${user.displayName}</h3>
      <h6>Nombre de mascota - ubicación</h6>
    </div>
    <i class="ai-more-horizontal-fill"></i>
  </section>
  <section class="postContent">
    <p class="postDescription">
      Holassss este es mi Post
    </p>
  </section>
  <section class="postFooter">
    <div class="postInline">
      <i class="ai-heart"></i>
      <p class="postCount">0</p>
    </div>
    <div class="postInline">
      <i class="ai-chat-bubble"></i>
      <p class="postCount">0</p>
      </div>
    <div class="postInline">
      <i class="ai-telegram-fill"></i>
      <p class="postCount">0</p>
    </div>
  </section>
  `;
  return post;
};

const userProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const element = document.createElement('section');
  element.innerHTML = `
    <section class="userProfile">
      <img class="userPhotoBackground" src="${user.photoURL}"/>
      <img class="userPhoto" src="${user.photoURL}"/>
      <div class="userName">
        <h3>${user.displayName}</h3>
        <h6>Nombre de mascota - ubicación</h6>
      </div>
    </section>
  `;
  return element;
};

const suggestionToFollow = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const element = document.createElement('section');
  element.innerHTML = `
    <section class="userFollow">
      <img class="userPhotoToFollow" src="${user.photoURL}"/>
      <div class="userNameToFollow">
        <h3>${user.displayName}</h3>
        <h6>Nombre de mascota - ubicación</h6>
      </div>
      <button class="buttonFollow">Seguir</button>
    </section>
  `;
  return element;
};

const logOut = (container) => {
  container.querySelector('#cerrar').addEventListener('click', () => {
    signOut();
    window.location.hash = '#/login';
  });
};

export const home = () => {
  userState();
  const container = document.createElement('section');
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  container.innerHTML = `
    <h1>Hola!!!!! Aquí va la Página de Inicio</h1>
    <button id="cerrar">Cerrar</button>`;
  container.appendChild(viewPost());
  container.appendChild(userProfile());
  container.appendChild(suggestionToFollow());
  logOut(container);
  return container;
};
