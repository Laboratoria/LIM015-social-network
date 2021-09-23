/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import { signOutUser, onAuthStateChanged } from '../firebase/firebase-auth.js';
import {
  postCollection, getCollection, deletePost, getUserCollection,
} from '../firebase/firebase-firestore.js';

const userStateCheck = () => {
  onAuthStateChanged((user) => {
    if (user !== null && user.emailVerified) {
      window.location.hash = '#/onlycats';
    } else if (user === null) {
      window.location.hash = '';
    }
  });
};

export const pageOnlyCats = () => {
  userStateCheck();
  const user = JSON.parse(localStorage.getItem('user'));
  const imgDefault = 'https://pbs.twimg.com/profile_images/1101458340318568448/PpkA2kQh_400x400.jpg';
  const photo = (user.photoURL === null) ? imgDefault : user.photoURL;
  const pageOcView = `
  <div class="page-container">
    <header class = "header-container">
      <img src="./img/only-cats.png" "alt='only-cats' class="page-title">
      <i class="fas fa-sign-out-alt" id="sign-out"></i>
      <i class="fas fa-cat" style="display:none"></i>
    </header>
    <main class="scroll-container">
      <div class="label-container">
        <button class="label-btn meme">Memes</button>
        <button class="label-btn vet">Vet Cat</button>
        <button class="label-btn foodie">Foodie Cat</button>
      </div>
      <form id="post-form" class="profile-post publish">
          <div class="container-photo">
              <img src=${photo} "alt='picture' class="profile-photo">
          </div>
            <div class="section-profile" >
              <textarea class="text-input" id="text-input" placeholder="¿Miau esta pasando?" autofocus></textarea>
                <div class="post-icon">
                  <i class="fas fa-image"></i>
                  <button class="post-button" id="post-button" type="submit">Meow</button>
                </div>
            </div>
        </section>
        <section  id="other-post">
      </form>
    </main>
  </div>`;
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = pageOcView;

  const postForm = sectionElement.querySelector('#post-form');
  postForm.addEventListener('submit', (e) => {
    const textInput = sectionElement.querySelector('#text-input');
    e.preventDefault();
    const post = textInput.value;
    postCollection(post)
      .then(() => {
        console.log('datos guardados');
        postForm.reset();
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });
  const showPosts = () => {
    getCollection()
  };
  // const btnPublish = sectionElement.querySelector('#post-button');

  // // -------- Crear Posts (C) --------
  // const createPost = (e) => {
  //   e.preventDefault();
  //   let userName;
  //   if (user.displayName === null) {
  //     getUserCollection().onSnapshot((querySnapshot) => {
  //       querySnapshot.forEach(() => {
  //       });
  //     });
  //     console.log(user.email);
  //   } else {
  //     userName = user.displayName;
  //     const post = textInput.value;
  //     postCollection(post, userName, photo)
  //       .then(() => {
  //         textInput.value = ' ';
  //       })
  //       .catch((error) => {
  //         console.error('Error adding document: ', error);
  //       });
  //   }
  // };

  // // -------- Leer Posts (R) --------
  // const readPosts = () => {
  //   getCollection().onSnapshot((querySnapshot) => {
  //     const newPost = sectionElement.querySelector('#other-post');
  //     newPost.innerHTML = ' ';
  //     querySnapshot.forEach((doc) => {
  //       const dataContent = doc.data();
  //       newPost.innerHTML += `
  //       <section class="profile-post">
  //         <div class="update-post">
  //         <button id="btn-deletePost" class="btn-delete" data-id='${doc.id}'>Eliminar</button>
  //         <button>Editar</button>
  //         </div>
  //         <div class="container-photo">
  //           <img src="${dataContent.photo}" "alt='picture' class="profile-photo">
  //         </div>
  //         <section class="section-post">
  //           <p class="name-input"> ${dataContent.user} </p>
  //           <p readonly class="text-output">${dataContent.text}</p>
  //         </section>
  //       </section> `;
  //     });
  //     const btnDelete = sectionElement.querySelectorAll('.btn-delete');
  //     btnDelete.forEach((btn) => {
  //       btn.addEventListener('click', (e) => {
  //         deletePost(e.target.dataset.id)
  //           .then(() => {
  //             console.log('Document successfully deleted!');
  //           }).catch((error) => {
  //             console.error('Error removing document: ', error);
  //           });
  //       });
  //     });
  //   });
  // };

  // btnPublish.addEventListener('click', createPost);
  // readPosts();

  // ------------------ Salir de la página --------------------
  const signOut = sectionElement.querySelector('#sign-out');
  signOut.addEventListener('click', (e) => {
    e.preventDefault();
    const result = confirm('¿En serio quieres salir?');
    if (result === true) {
      signOutUser()
        .then(() => {
          window.location.hash = '';
          window.localStorage.clear();
        });
    }
  });

  return sectionElement;
};
