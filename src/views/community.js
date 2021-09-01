import { savePost, getPost, deletePost } from '../scripts/fs-firestore.js';

export default () => {
  const main = document.querySelector('.views'); // este main es para las vistas
  const article = document.createElement('article');
  const googleUser = JSON.parse(localStorage.getItem('user'));
  const emailUserName = localStorage.getItem('name');
  const emailUserEmail = localStorage.getItem('email');
  article.className = 'home';
  article.innerHTML = `
  <section class="muro" id="muro">
   <div class="contenedor">
     <!--contendedor de información de columna de usuario y posters-->
     <div class="muro_user-posters">
       <div class="muro-info">
         <h3 class="title">Bienvenidx</h3>

         <!--Información del usuario-->
         <div class="information-user">
           <div class="user-img">
           ${googleUser !== null ? `<img src="${googleUser.photo}" alt="Foto de perfil" />` : '<img src="images/profileDefault.jpeg" alt="Foto de perfil por defecto" />'}
           </div>
           ${googleUser !== null ? `<p class="user-name">${googleUser.name}<br>${googleUser.email}</p>` : `<p class="user-name">${emailUserName}<br>${emailUserEmail}</p>`}
         </div>
         <hr>
         <!--Div de Banner-->
         <div class="Crunchyroll">
            <a href="https://www.crunchyroll.com/es" target="_blank"><img src="./images/banner.gif" alt="Publicidad de Crunchyroll" title="¡Crunchyroll!" /></a>
         </div>

         <h2 class="title-anime">
          Animes populares
         </h2>

         <!--contendedor de posters de anime-->
         <div class="container-posters">
         <figure>
         <a href="https://www.crunchyroll.com/es/attack-on-titan
         " target="_blank"><img src="./images/port1.png" alt="Poster de Shingeki no Kyojin"></a>
         <figcaption>
           <h3>Attack on Titan<br>Final Season</h3>
           <h5></h5>
         </figcaption>
       </figure>
       
       <figure>
         <a href="https://www.crunchyroll.com/es/tokyo-revengers
         " target="_blank"><img src="./images/port2.png" alt="Poster de Tokyo Revengers"></a>
         <figcaption>
           <h3>Tokio Revengers<br>Episode 19</h3>
         </figcaption>
       </figure>

       <figure>
         <a href="https://www.crunchyroll.com/es/jojos-bizarre-adventure
         " target="_blank"><img src="./images/port3.jpg" alt="Poster de Jojo's"></a>
         <figcaption>
           <h3>JOJO'S<br>5th Season</h3>
         </figcaption>
       </figure>
  
       <figure>
         <a href="https://www.crunchyroll.com/es/anime-news/2021/06/16/demon-slayer-kimetsu-no-yaiba-the-movie-mugen-train-hace-explotar-el-mercado-japons-con-su-lanzamiento-en-bddvd
         " target="_blank"><img src="./images/port4.png" alt="Poster de Demon Slayer"></a>
         <figcaption>
           <h3>Demon Slayer<br>Movie</h3>
         </figcaption>
       </figure>
        </div>
      </div>

      <!--Columna de posts-->
      <div class="muro-posts">
         <h3 class="title">Postea:</h3>
         <div class="txt-post">
           <textarea
            name="message"
            class="posts textarea"
            placeholder="¿Qué quieres compartir?"></textarea>
         </div>
        <div class="btn-share">
         <button type="submit" class="post_btn">Compartir</button>
        </div> 
        <div class="container-posts">
         <!-- Acá se agregan los posts -->
        </div>
      </div>
     </div>
   </div>
 </section>
  `;
  main.appendChild(article);
  /*
  // esta es otra forma de hacer lo de abajo
  main.addEventListener('click', (e) => {
    if (e.target.className === 'post_btn') {
      const post = document.querySelector('.posts');
      savePost(post).then(() => {
        console.log('se mandó');
      });
      post.value = '';
    }
  });
  */
  const contenedor = document.querySelector('.container-posts');
  const defaultImg = 'https://cdn.myanimelist.net/images/userimages/3950429.jpg?t=1505773800';

  // Ejecuta savePost enviando el contenido del textarea
  const shareBtn = document.querySelector('.post_btn');
  shareBtn.addEventListener('click', () => {
    const post = document.querySelector('.posts');
    if (googleUser === null) {
      savePost(post, emailUserName, emailUserEmail, defaultImg).then(() => {
        console.log('se mandó');
      });
    } else {
      savePost(post, googleUser.name, googleUser.email, googleUser.photo).then(() => {
        console.log('se mandó');
      });
    }
    post.value = '';
    contenedor.innerHTML = '';
  });

  // Función que ejecuta getPost y muestra los posts en un template
  const publications = () => {
    getPost().onSnapshot((doc) => {
      doc.forEach((docs) => {
        const infoPosts = docs.data();
        contenedor.innerHTML += ` 
        <section class="section-post">
          <div class="user-post">
           <div class="user-img-post">
             <img src="${infoPosts.photo}" alt="Foto de perfil" />
             <p class="user-name">${infoPosts.name}</p>
           </div>
           <div class="icons-post"><i class="fas fa-trash-alt" id=${docs.id}></i><i class="fas fa-edit"></i></div>
         </div>
          <div><p class="text-print-post">${docs.data().post}</p></div>
        </section>
        <!--Modal-->
        <div class="modal-fondo">
         <div class="modal-contenedor">
            <h4 class="titulo">Aviso</h4>
            <p class="close">X</p>
            <div class="contenido">
             <p>¿Estás seguro que quieres eliminar este valioso post?</p>
            </div>
            <div class="modal-botones">
            <button class="no">No</button> 
            <button class="si">Si</button> 
           </div>
          </div>
        </div>;
          <div><p class="text-print-post">${infoPosts.post}</p></div>
        </section>`;
      });

      // Función para borrar los posts
      const deleteBtns = document.querySelectorAll('.fa-trash-alt');
      console.log(deleteBtns);
      deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          contenedor.innerHTML = '';
          deletePost(e.target.id);
        });
      });
    });
  };
  publications();
};
