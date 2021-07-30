// Inicio de las publicaciones

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
                        <li><a href="#/profile">Profile</a></li>
                        <li><a href="#/">Sign-Out</a></li>
                    </ul>
                </nav>
            </header>
        </section>
            <section class = "container-perfil">
            <section id="user-perfil" class="user-perfil">
                <section>
                    <img class="img-profile" src="img/libro9.png" alt="">
                </section>
                <section>
                    <section class="flex margin">
                        <section class="flex-align">
                            <p>jala la foto gmail en img en vez de p</p>
                            <h2 id="profile-name">jala el nombre de gmail</h2>
                        </section>
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
    `;

  sectionHome.innerHTML = template;
  sectionHome.setAttribute('class', 'contenedor-Home');

  return sectionHome;
};
