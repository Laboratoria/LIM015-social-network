// Inicio de las publicaciones
// import { sharePost } from '../firebase/data-base.js';
// import { sharingPost } from '../views/post.js';
import { currentUser } from '../firebase/autenticacion.js';

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
                        <li><a href="#/home">Home</a></li>
                        <li class="current-user"><a href="#/profile">${currentUser().displayName}</a></li>
                        <li><a href="#/">Sign-Out</a></li>
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
                            <section class="flex-align">
                                <i class="fas fa-book-open  margin" aria-hidden="true"></i>
                                <p>¿cuantos libros leiste va con id?</p>
                            </section>
                            <section class="flex-align">
                                <i class="fas fa-bahai margin" aria-hidden="true"></i>
                                <p>Una frase de libro que te guste va con id</p>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
<!--Estos son para que las personas puedan escribir sus post-->
    <section class="content-post">
        <section class="form-save">
            <form class="padding" maxlength="50" required>
                <textarea placeholder="¿Que quieres compartir?" class="textArea-comment "></textarea>
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
                        <input type="button" class="btn-share" value="compartir">
                    </section>
                </form>
            </section>
    </section>
</section>
<section id="container-post"></section>
    `;

  sectionHome.innerHTML = template;
  sectionHome.setAttribute('class', 'contenedor-Home');
  // const containerPost = document.getElementById('container-post');
  // containerPost.appendChild(sharingPost);
  // console.log(containerPost);
  return sectionHome;
};
