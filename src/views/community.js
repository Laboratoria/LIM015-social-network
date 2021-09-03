/* eslint-disable max-len */
import {
  savePost, getAllPosts, deletePost, getPost, updatePost,
} from '../scripts/fs-firestore.js';

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
          <img src="./images/port1.png" alt="Poster de Shingeki no Kyojin">
         <figcaption>
         <a href="https://www.crunchyroll.com/es/attack-on-titan" target="_blank"><h3>Attack on Titan<br>Final Season</h3></a>
         </figcaption>
       </figure>
       
       <figure>
         <img src="./images/port2.png" alt="Poster de Tokyo Revengers">
         <figcaption>
         <a href="https://www.crunchyroll.com/es/tokyo-revengers" target="_blank"><h3>Tokio Revengers<br>Episode 19</h3></a>
         </figcaption>
       </figure>

       <figure>
         <img src="./images/port3.jpg" alt="Poster de Jojo's">
         <figcaption>
         <a href="https://www.crunchyroll.com/es/jojos-bizarre-adventure" target="_blank"><h3>JOJO'S<br>5th Season</h3></a>
         </figcaption>
       </figure>
  
       <figure>
         <img src="./images/port4.png" alt="Poster de Demon Slayer">
         <figcaption>
         <a href="https://www.crunchyroll.com/es/anime-news/2021/06/16/demon-slayer-kimetsu-no-yaiba-the-movie-mugen-train-hace-explotar-el-mercado-japons-con-su-lanzamiento-en-bddvd" target="_blank"><h3>Demon Slayer<br>Movie</h3></a>
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
  let editStatus = false;
  let id = '';
  shareBtn.addEventListener('click', async () => {
    const post = document.querySelector('.posts');
    if (googleUser === null) {
      savePost(post.value, emailUserName, emailUserEmail, defaultImg).then(() => {
        console.log('se mandó');
      });
    } else {
      savePost(post.value, googleUser.name, googleUser.email, googleUser.photo).then(() => {
        console.log('se mandó');
      });
    }

    if (!editStatus) {
      // savePost(post);
      console.log('ke?');
    } else {
      contenedor.innerHTML = '';
      await updatePost(id, post.value);
      deletePost(id);
      post.value = '';
      editStatus = false;
      shareBtn.innerText = 'Compartir';
    }
    post.value = '';
    contenedor.innerHTML = '';
  });

  // Función que ejecuta getAllPosts y muestra los posts en un template
  const publications = () => {
    getAllPosts().onSnapshot((doc) => {
      doc.forEach((docs) => {
        const infoPosts = docs.data();
        contenedor.innerHTML += ` 
        <section class="section-post">
          <div class="user-post">
           <div class="user-img-post">
             <img src="${infoPosts.photo}" alt="Foto de perfil" />
             <p class="user-name">${infoPosts.name}</p>
           </div>
           <div class="icons-post ">
           <i class="fas fa-trash-alt" id=${docs.id}></i><i class="fas fa-edit" id=${docs.id}></i></div>
         </div>
          <div><p class="text-print-post">${infoPosts.post}</p></div>
         
          <!--Modal-->
          <div class="modal-fondo">
            <div class="modal-contenedor">
              <h1 class="titulo">¡Aviso!</h1>
              <div class="contenido">
                <p class="mensaje-modal">¿Estás seguro que quieres eliminar este valioso post?</p>
              </div>
              <div class="modal-botones">
               <button class="no">No (￣ヘ￣;)</button> 
               <button class="si">Si ( ಥ‿ಥ )</button> 
              </div>
           </div>
         </div> 
        </section>`;
      });

      // Función para borrar los posts
      const deleteBtns = document.querySelectorAll('.fa-trash-alt');
      const si = document.querySelector('.si');
      const no = document.querySelector('.no');
      // console.log(deleteBtns);
      const modal = document.querySelector('.modal-fondo');
      deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          console.log(e.target.id);
          modal.classList.add('show-modal');
          // SI
          si.addEventListener('click', () => {
            contenedor.innerHTML = '';
            deletePost(e.target.id);
            modal.classList.remove('show-modal');
          });
          // NO
          no.addEventListener('click', () => {
            modal.classList.remove('show-modal');
          });
        });
      });

      // Función para editar posts
      const editBtns = document.querySelectorAll('.fa-edit');
      const post = document.querySelector('.posts');
      editBtns.forEach((btnE) => {
        btnE.addEventListener('click', async (e) => {
          // console.log(e.target.id);
          const document = await getPost(e.target.id);
          console.log(e.target.id);
          console.log(document.data());
          post.value = document.data().post;
          editStatus = true;
          id = document.id;
          console.log(id);
          shareBtn.innerText = 'Editar';
        });
      });
    });
  };
  publications();
};

// ${((docs.data().email === emailUserEmail) || (docs.data().email === googleUser.email)) ? 'show' : 'hide'}
