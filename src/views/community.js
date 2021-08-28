import { savePost, getPost } from '../scripts/fs-firestore.js';

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
            <img src="./images/banner.gif" alt="Publicidad de Crunchyroll" title="¡Crunchyroll!" />
         </div>

         <h2 class="title-anime">
          Animes populares
         </h2>

         <!--contendedor de posters de anime-->
         <div class="container-posters">
         <figure>
         <img src="./images/port1.png" alt="Poster de Shingeki no Kyojin">
         <figcaption>
           <h3>Attack on Titan<br>Final Season</h3>
           <h5></h5>
         </figcaption>
       </figure>
       
       <figure>
         <img src="./images/port2.png" alt="Poster de Tokyo Revengers">
         <figcaption>
           <h3>Tokio Revengers<br>Episode 19</h3>
         </figcaption>
       </figure>

       <figure>
         <img src="./images/port3.jpg" alt="Poster de Jojo's">
         <figcaption>
           <h3>JOJO'S<br>5th Season</h3>
         </figcaption>
       </figure>
  
       <figure>
         <img src="./images/port4.png" alt="Poster de Demon Slayer">
         <figcaption>
           <h3>Demon Slayer<br>Movie</h3>
         </figcaption>
       </figure>
        </div>
      </div>

      <!--Columna de posts-->
      <div class="muro-posts">
         <h3 class="title">Postea ♥ :</h3>
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
        contenedor.innerHTML += ` 
        <section class="section-post">
          <div class="user-post">
           <div class="user-img-post">
             <img src="${docs.data().photo}" alt="Foto de perfil" />
             <p class="user-name">${docs.data().name}</p>
           </div>
           <div class="icons-post"><i class="fas fa-trash-alt"></i><i class="fas fa-edit"></i></div>
         </div>
          <div><p class="text-print-post">${docs.data().post}</p></div>
        </section>`;
      });
    });
  };
  publications();
};
