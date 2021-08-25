export default () => {
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
           ${googleUser !== null ? `<img src="${googleUser.photo}" alt="" />` : '<img src="images/profileDefault.jpeg" alt="" />'}
           </div>
           ${googleUser !== null ? `<p class="user-name">${googleUser.name}<br>${googleUser.email}</p>` : `<p class="user-name">${emailUserName}<br>${emailUserEmail}</p>`}
         </div>
         <hr>
         <!--Div de Banner-->
         <div class="banner">
            <img src="images/banner.gif" alt="" title="¡Estreno!" />
         </div>

         <h2 class="title-anime">
          Animes populares
         </h2>

         <!--contendedor de posters de anime-->
         <div class="container-posters">
         <figure>
         <img src="./images/port1.png" alt="">
         <figcaption>
           <h3>Attack on Titan<br>Final Season</h3>
           <h5></h5>
         </figcaption>
       </figure>
       
       <figure>
         <img src="./images/port2.png" alt="">
         <figcaption>
           <h3>Tokio Revengers<br>Episode 19</h3>
         </figcaption>
       </figure>

       <figure>
         <img src="./images/port3.jpg" alt="">
         <figcaption>
           <h3>JOJO'S<br>5th Season</h3>
         </figcaption>
       </figure>
  
       <figure>
         <img src="./images/port4.png" alt="">
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
      </div>
     </div>
   </div>
 </section>
  `;
  return article;
};
