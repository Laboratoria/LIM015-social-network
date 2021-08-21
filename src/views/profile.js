// import { getPostId, deletePost } from '../firebase/firebase-firestore.js';
export const PROFILE = () => {
  const view = `
  <section class='profileContainer'>
    <figure>
      <img id='imgUser' class='imgProfile' src="../images/imgDefault3.png" alt="photoProfile" />
      <button class='addImage'>&#10133;</button>
    </figure>
    <p id='nameProfile' class='nameProfile'>Ariana</p>
    <p id='status' class='status'>Estado: Viajer@ Empedernid@</p>
  </section>
  <section class='aboutUser'>
    <h2>Sobre mí:</h2>
    <p>Me encanta viajar</p>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  // CONSTANTES GLOBALES
  const imgElement = divElement.querySelector('#imgUser');
  const userNameProfile = divElement.querySelector('#nameProfile');
  // FUNCIONALIDAD
  // ------------------------- Foto de perfil -------------------------
  if (localStorage.getItem('userPhoto')) {
    imgElement.src = localStorage.getItem('userPhoto');
  } else {
    imgElement.src = '../images/imgDefault3.png';
  }
  // -------------------------  Mostrar nombre de perfil -------------------------
  if (localStorage.getItem('userName') === null) {
    userNameProfile.textContent = localStorage.getItem('userEmail');
  } else {
    userNameProfile.textContent = localStorage.getItem('userName');
  }

  // AQUI TERMINA LA VISTA
  return divElement;
};
