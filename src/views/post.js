export const sharingPost = () => {
  const sectionPost = document.createElement('section');
  const template = `
  <section>
          <ul class="ul-parent">
              <li class="li-child">
                  <section class="section-post">
                      <section class="user-publicated padding flex-name-post">
                          <section class="only-flex">
                              <section>
                                  <p>Name</p>
                                  <select id="selectPriv-lomismo" class="btn-select" name="select">
                                      <option value="privado">Privado</option>
                                      <option value="público" selected>Público</option>
                                  </select>
                              </section>
                              <p class="date-publication">Falta
                                  p.&nbsp;m.</p>
                          </section>
                          <span id="delete-lomismo" class="hide">
                              <i class="fas fa-trash" aria-hidden="true"></i>
                          </span>
                      </section>
                      <section class="middle-post">
                          <section class="textarea no-border padding" id="text-lomismo" contenteditable="false">YA NOS
                              FALTA
                              POCO</section>
                          
                      </section>
                      <section class="bottom-post padding">
                          <section class="bottom-heart">
                              <i class="fa fa-heart-o heart-empty" aria-hidden="true">
                              </i>
                              <i class="fa fa-heart-full hide" aria-hidden="true">
                              </i>
                              <a class="counter-heart">8
                              </a>
                          </section>
                          <section class>
                              <span id="show-comment">
                                  <i class="fa fa-comment-o show-comment" aria-hidden="true">
                                  </i>
                              </span>
                              <a class="counter-heart">2
                              </a>
                          </section>
                          <span class="margin-left hide">
                              <i class="fa fa-heart-floppy-o iconSave" aria-hidden="true">
                              </i>
                              <span></span>
                          </span>
                      </section>
                      <section class="hide">
                          <form class="form-comment" maxlength="50" required>
                              <textarea placeholder="Escribe tu comentario" class="textarea-comment">
                              </textarea>
                              <span class="margin">
                                  <i class="fa fa-paper-plane btn-comment" aria-hidden="true">
                                  </i>
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

  return sectionPost;
};
