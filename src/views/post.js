// import { currentUser } from '../firebase/autenticacion.js';
import { editLikes } from '../views-controllers/post-control.js';

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
                          <span id="deletePost" class="hide">
                              <i class="fas fa-trash" aria-hidden="true"></i>
                          </span>
                      </section>
                      <section class="middle-post">
                          <section class="textarea no-border padding" id="text-lomismo" contenteditable="false">${data.postText}</section>
                      </section>
                      <section class="bottom-post">
                          <button id="like-${data.id}" class="bottom-heart"><i id="count-Like" class="fa fa-heart-o heart-empty" aria-hidden="true">  ${data.likes}</i></button>
                          <button class="show-comment">
                              <span id="show-comment">
                                  <i class="fa fa-comment-o show-comment" aria-hidden="true"></i>
                              </span>
                              <a class="counter-heart">2</a>
                          </button>
                          <span class=" heart-hide">
                              <i class="fa fa-heart-floppy-o iconSave" aria-hidden="true"></i>
                              <span></span>
                          </span>
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

  const btnLike = sectionPost.querySelector(`#like-${data.id}`);

  btnLike.addEventListener('click', () => {
    const likeValue = data.likes + 1;
    editLikes(data.id, likeValue);
  });

  return sectionPost;
};
