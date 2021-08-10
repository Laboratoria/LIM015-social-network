// import { currentUser } from '../firebase/autenticacion.js';
import { editLikes, deletePost, editPost } from '../views-controllers/post-control.js';
// import { editLikes, deletePost, deleteLike, getAllLikes}
// from '../views-controllers/post-control.js';

export const sharingPost = (data) => {
  const time = new Date(data.timePost.toDate());
  const sectionPost = document.createElement('section');
  const template = `
  <section>
          <ul class="ul-parent">
              <li class="li-child">
                  <section class="section-post">
                      <section class="user-publicated padding flex-name-post">
                          <section class="only-flex">
                              <section>
                                  <p class="display-name">${data.user}</p>
                                  <select id="select-Priv" class="btn-select" name="select">
                                      <option value="privado">Privado</option>
                                      <option value="público" selected>Público</option>
                                  </select>
                              </section>
                              <p class="date-publication">
                              ${time.getHours()}${':'}${time.getMinutes()}
                              ${time.getDate()}${'/'}${time.getMonth() + 1}${'/'}${time.getFullYear()}
                              </p>
                          </section>
                          <button id="deletePost" class="">
                              <i class="fas fa-trash" aria-hidden="true"></i>
                          </button>
                          <button id="savePost" class="hide">
                              <i class="fas fa-save" aria-hidden="true"></i>
                          </button>
                          <button id="edit-${data.id}">
                               <i class="fas fa-edit" aria-hidden="true"></i>
                          </button>
                      </section>
                      <section class="middle-post">
                          <textarea class="textarea no-border padding" id="text-post" disabled>${data.postText}</textarea>
                      </section>
                      <section class="bottom-post">
                          <button id="like-${data.id}" class="bottom-heart">
                          <i class="fa fa-heart heart-full" aria-hidden="true" id="dislike-${data.id}" i>
                          </button> 
                          <button>
                          <i id="counter-${data.id}" class="fa fa-heart-o heart-empty" aria-hidden="true">  ${data.likes}</i>
                          </button>
                          <button class="show-comment">
                              <span id="show-comment">
                                  <i class="fa fa-comment-o show-comment" aria-hidden="true"></i>
                              </span>
                              <a class="counter-comment">2</a>
                          </button>
                          <!-- <span class="margin-left hide">
                              <i class="fa fa-heart-floppy-o iconSave" aria-hidden="true"></i>
                              <span></span>
                          </span> -->
                      </section>
                      <section class="hide">
                          <form class="form-comment" maxlength="50" required>
                              <textarea placeholder="Escribe tu comentario" class="textarea-comment">
                              </textarea>
                              <span class="comment">
                                  <i class="fa fa-paper-plane btn-comment" aria-hidden="true"></i>
                              </span>
                          </form>
                      </section>
                  </section>
              </li>
          </ul>
      </section>
      `;

  sectionPost.innerHTML = template;
  sectionPost.setAttribute('class', 'contenedor-post');

  // const counter = sectionPost.querySelector(`#counter-${data.id}`);
  // const btnLike = sectionPost.querySelector(`#like-${data.id}`);
  // const btnDislike = sectionPost.querySelector(`#dislike-${data.id}`);
  // const callbackLikes = (likes) => {
  //   counter.innerHTML = '';
  //   counter.innerHTML = likes.length;
  //   const user = likes.find((like)=> like.id === currentUser().uid);
  //   if (user === undefined) {
  //     // btnDislike.classList.add('hide');
  //     btnLike.classList.remove('hide');
  //     btnLike.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       editLikes(data.id);
  //       btnDislike.classList.add('hide');
  //       btnLike.classList.remove('hide');
  //     });
  //   } else {
  //     btnDislike.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       deleteLike(data.id);
  //       btnLike.classList.add('hide');
  //       btnDislike.classList.remove('hide');
  //     });
  //   }
  // };

  // getAllLikes(data.id, callbackLikes);

  const deletedPost = sectionPost.querySelector('#deletePost');
  const editedPost = sectionPost.querySelector(`#edit-${data.id}`);
  const savePost = sectionPost.querySelector('#savePost');
  const textToEdit = sectionPost.querySelector('#text-post');

  deletedPost.addEventListener('click', () => {
    deletePost(data.id);
  });

  editedPost.addEventListener('click', () => {
    savePost.classList.remove('hide');
    editedPost.classList.add('hide');
    textToEdit.disabled = false;
    textToEdit.select();
  });

  savePost.addEventListener('click', () => {
    editedPost.classList.remove('hide');
    savePost.classList.add('hide');
    editPost(data.id, textToEdit.value);
    textToEdit.disabled = true;
  });

  // btnLike.addEventListener('click', () => {
  //   const likeValue = data.likes + 1;
  //   editLikes(data.id, likeValue);
  // });

  return sectionPost;
};
