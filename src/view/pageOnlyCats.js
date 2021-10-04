/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import { signOutUser, onAuthStateChanged } from '../firebase/firebase-auth.js';
import {
  postCollection, getCollection, deletePost, getPost, editPost, editLike,
} from '../firebase/firebase-firestore.js';
import { uploadPostImage, getPostImageURL } from '../firebase/firebase-storage.js';

/* -------------------------------Verificar si el usuario está conectado---------------------- */
const userStateCheck = () => {
  onAuthStateChanged((user) => {
    if (user !== null && user.emailVerified) {
      window.location.hash = '#/onlycats';
    } else if (user === null) {
      window.location.hash = '';
    }
  });
};
/* ---------------------------------Diseñar la página OnlyCats--------------------------------- */
export const pageOnlyCats = () => {
  userStateCheck();
  const imgDefault = 'https://pbs.twimg.com/profile_images/1101458340318568448/PpkA2kQh_400x400.jpg';
  const localUser = JSON.parse(localStorage.getItem('user'));
  const photoUser = (localUser.photoURL === null) ? imgDefault : localUser.photoURL;
  const displayName = localUser.displayName;
  const email = localUser.email;
  const uid = localUser.uid;
  let id = ' ';
  let editStatus = false;
  const pageOcView = `
  <section class="page-container">
    <header class = "header-container">
      <img src="./img/only-cats.png" "alt='only-cats' class="page-title">
      <i class="fas fa-sign-out-alt" id="sign-out"></i>
      <i class="fas fa-cat" style="display:none"></i>
    </header>
    <main class = "main-container" >
      <section class="label-container">
        <p class="label-name"> ¿Qué ver? </p>
        <div class="post-label meme">
          <img src="./img/memecat.png" alt="memes" class="img-memes">
          <p>Memes</p>
        </div>
        <div class="post-label vet">
          <img src="./img/vetcat.png" alt="memes" class="img-memes">
          <p>Vet Cat</p>
        </div>
        <div class="post-label foodie">
          <img src="./img/foodiecat.png" alt="memes" class="img-memes">
          <p>Foodie</p>
        </div>
      </section>
      <section class="scroll-container">
        <article class="profile-post publish" >
          <div class="container-photo">
              <img src="${photoUser}" "alt='picture' class="profile-photo">
          </div>
          <section class="section-profile" >
            <textarea class="text-input" id="text-input" placeholder="¿Miau esta pasando?"></textarea>
            <div class="post-icon">
              <label class="postImage">
                <i class="fas fa-image"></i> <input class="post-file" type="file" id="postImage" accept="image/*"/> 
              </label>
              <button class="post-button hide" id="cancel-button" type="submit">Cancelar</button>
              <button class="post-button" id="post-button" type="submit">Meow</button>
            </div>
          </section>
        </article>
        <section id="other-post"></section>
      </section>
      <aside class="profile-container">
        <div class="container-fondo">
          <img src="./img/profile.png" "alt='fondo' class="profile-fondo">
        </div>
        <div class="container-phot">
          <img src="${photoUser}" "alt='picture' class="profile-phot">
        </div>
        <p class="profile-name"> ${localUser.displayName} </p>
        <p class="profile-email"> ${email} </p>
        <p class="biography-name"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p class="profile-btn" id="profile-btn">Editar Perfil</p>
      </aside>
    </main>
  </section>`;

  const sectionElement = document.createElement('section');
  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = pageOcView;
  // -----Botones del Post
  const btnPublish = sectionElement.querySelector('#post-button');
  const textInput = sectionElement.querySelector('#text-input');

  // -------- Leer o mostrar Posts (R) --------

  const readPosts = () => {
    getCollection().onSnapshot((querySnapshot) => {
      const newPost = sectionElement.querySelector('#other-post');
      newPost.innerHTML = ' ';
      querySnapshot.forEach((doc) => {
        const dataContent = doc.data();
        dataContent.id = doc.id;
        newPost.innerHTML += `
        <article class="profile-post">
          <div class="container-photo">
            <img src="${dataContent.photoUser}" "alt='picture' class="profile-photo">
          </div>
          <section class="section-post">
            <p class="name-input"> ${dataContent.user} </p>
            <p readonly class="text-output">${dataContent.text}</p>
            <div class="post-divImg">
            <img src="${(dataContent.postImage.length === 1) ? '' : dataContent.postImage}" class="post-photo" >
            </div>
            <div class="likes-container">
              <i class="far fa-heart" id="${dataContent.id}"></i>
              <img src="https://img.icons8.com/color/48/000000/dog-paw-print.png" class="pata" >
              <img src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-kissing-cat-emoji-tulpahn-flat-tulpahn.png" class="pata" >
              <img src="https://img.icons8.com/cute-clipart/64/000000/cat.png" class="pata" >
              <img src="https://cdn-icons-png.flaticon.com/512/2865/2865523.png" class="pata" >
              <span>${dataContent.likes.length} </span>
            </div>
          </section>
          <section class="update-post  ${(dataContent.email === localUser.email) ? '' : 'hide'}">
            <button class="btn-delete"><i class="fas fa-trash" id="${doc.id}"></i></button>
            <button class="btn-edit"><i class="fas fa-edit" id="${doc.id}"></i></button>
          </section>
          
        </article> `;
      });

      /* -------------------------Eliminar Post (R) ---------------------- */
      const btnDelete = sectionElement.querySelectorAll('.btn-delete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          swal({
            title: '¿Estás segurx?',
            text: 'Una vez eliminado, no podrás recuperar el michi-post.',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                deletePost(e.target.id);
                swal('Meow! Tu michi-post ha sido eliminado.', {
                  icon: 'success',
                });
              } else {
                swal('¡Tu michi-post está a salvo!');
              }
            });
        });
      });

      // -------- Editar Posts (U) --------
      const btnEdit = sectionElement.querySelectorAll('.btn-edit');
      btnEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const postSeleccionado = await getPost(e.target.id);
          // Para saber lo que dice el post => console.log(postText.value);
          textInput.value = postSeleccionado.data().text;
          editStatus = true;
          // data del post => console.log(postSeleccionado);
          // id del post => console.log(postSeleccionado.id);
          id = postSeleccionado.id;
          btnPublish.innerText = 'Editar';
          sectionElement.querySelector('.hide').style.display = 'block';
        });
      });

      // -------- Cancelar Editar Posts (U) --------
      const btnCancel = sectionElement.querySelector('#cancel-button');
      btnCancel.addEventListener('click', () => {
        textInput.value = '';
        btnPublish.innerText = 'Meow';
        // editStatus = false;
        sectionElement.querySelector('.hide').style.display = 'none';
        console.log('cancelado');
      });

      // -------- Like Posts  --------
      const btnHeart = sectionElement.querySelectorAll('.fa-heart');
      btnHeart.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          getPost(e.target.id)
            .then((doc) => {
              const arrayLike = doc.data().likes;
              if (arrayLike.includes(localUser.uid) === false) {
                arrayLike.push(localUser.uid);
                editLike(doc.id, arrayLike);
                /*  .then(() => console.log('se logró')).catch((error) => console.log(error)); */
              } else {
                const arrayLikeFilter = arrayLike.filter((link) => link !== localUser.uid);
                editLike(doc.id, arrayLikeFilter);
                /*  .then(() => console.log('se quitó')).catch((error) => console.log(error)); */
              }
            }).catch((error) => console.log(error));
        });
      });
    });
  };

  /* -------------------------------Crear Post (C) ------------------------- */
  btnPublish.addEventListener('click', async () => {
    // EditStatus sera falso cuando no exista un post, y recién se este creando
    if (textInput.value.length !== 0) {
      if (editStatus === false) {
        const postImage = container.querySelector('#postImage');
        const objFileImg = postImage.files[0];
        const dir = 'posts';
        if (postImage.files.length === 1) {
          const name = objFileImg.name;
          uploadPostImage(name, objFileImg)
            .then(() => getPostImageURL(dir, name))
            .then((photoURL) => {
              postCollection(textInput.value, displayName, photoUser, email, uid, photoURL);
              textInput.value = '';
              postImage.value = '';
            });
        } else if (postImage.files.length === 0) {
          postCollection(textInput.value, displayName, photoUser, email, uid, '');
          textInput.value = '';
        }
      } else {
        await editPost(id, textInput.value);
        textInput.value = '';
        btnPublish.innerText = 'Meow';
        sectionElement.querySelector('.hide').style.display = 'none';
      }
    } else if (textInput.value.length === 0) {
      swal('El post está vacío :c');
    }
  });
  readPosts();

  /* -------------------------------Salir de la página ----------------------- */
  const signOut = sectionElement.querySelector('#sign-out');
  signOut.addEventListener('click', (e) => {
    e.preventDefault();
    swal({
      title: '¿Quieres cerrar sesión?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          signOutUser()
            .then(() => {
              window.location.hash = '';
              window.localStorage.clear();
            });
          swal('Adiós, espero vuelvas pronto c:', {
            icon: 'success',
          });
        } else {
          swal('Genial! Sigue divirtiéndote.');
        }
      });
  });

  return sectionElement;
};
