// Inicio de las publicaciones
// import { sharePost } from '../firebase/data-base.js';
// import { sharingPost } from './post.js';
import { currentUser } from '../firebase/autenticacion.js';
// import { sharePost } from '../firebase/data-base.js';

export default () => {
  const sectionHome = document.createElement('section');
  const template = `
  <!-- comienza cuadrado del costado -->
  <section id="container" class="container">
        <section>
            <header>
                <h2 class="white">welcome a iBook</h2>
                <nav class="nav-bar" id="nav">
                    <ul>
                        <li><a href="#/home">HOME</a></li>
                        <li class="current-user"><a href="#/profile">${currentUser().displayName}</a></li>
                        <li><a href="#/">SIGN-OUT</a></li>
                    </ul>
                </nav>
            </header>
        </section>
            <section class = "container-perfil">
            <section id="user-perfil" class="user-perfil">
                <img class="img-profile" src="img/libro9.png" alt="">
                    <img class="img-perfil" src='${currentUser().photoURL}'/>
                    <p class="email-perfil">${currentUser().email}</p>
                <section>
                    <section class="flex margin">
                        <hr>
                        <section class="margin">
                            <section class="text-phrase">
                                <p>¿Cuantos libros vas leyendo este año?</p>
                                <i class="fas fa-book-open  margin" aria-hidden="true">&nbsp 12</i>

                            </section>
                            <section class="text-phrase">
                                <p>Mi frase del mes:</p>
                                <i class="fas fa-bahai margin" aria-hidden="true">&nbsp Vive al limite</i>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
  <!--Estos son para que las personas puedan escribir sus post-->
            <section class="content-general">
                <section class="content-post">
                  <section class="form-save">
                    <form class="padding" maxlength="50" required>
                      <textarea placeholder="¿Que quieres compartir?" id="textArea-comment" class="textArea-comment "></textarea>
                          <section class="flex-bottom-form">
                            <section>
                                <label for="fileButton">
                                    <i class="far fa-image btn-picture" aria-hidden="true">
                                    </i>
                                </label>
                                <input type="file" class="hide">
                            </section>
                            <select class="btn-select">
                                <option value="publico" selected>Público</option>
                                <option value="privado" select>Privado</option>
                            </select>
                            <input type="button" class="btn-share" id="btn-share" value="compartir">
                          </section>
                    </form>
                  </section>
                </section>

                <!--Estos son para que las personas puedan ver sus post-->
                <section id="container-post"></section>

            </section>

            </section>
          </section>
    `;

  sectionHome.innerHTML = template;
  sectionHome.setAttribute('class', 'contenedor-Home');

  return sectionHome;
};
