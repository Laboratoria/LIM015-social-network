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
           <div class="div-poster">
             <div class="poster_effect-text">
               <img src="./images/port3.jpg" alt="" />
               <div class="img-overlay">
                 <div class="img-titles">
                   <h3>JOJO'S</h3>
                   <h5>5th Season</h5>
                 </div>
              </div>
            </div>
           </div> 
           <div class="div-poster">
            <div class="poster_effect-text">
              <img src="./images/port4.png" alt="" />
              <div class="img-overlay">
                <div class="img-titles">
                  <h3>Demon Slayer</h3>
                  <h5>Movie</h5>
                </div>
              </div>
            </div>
           </div>  
           <div class="div-poster">
            <div class="poster_effect-text">
              <img src="./images/port1.png" alt="" />
              <div class="img-overlay">
                <div class="img-titles">
                  <h3>Attack on Titan</h3>
                  <h5>Final Season</h5>
                </div>
              </div>
            </div>
           </div>
           <div class="div-poster">
            <div class="poster_effect-text">
              <img src="./images/port2.png" alt="" />
              <div class="img-overlay">
                <div class="img-titles">
                  <h3>Tokio Revengers</h3>
                  <h5>Episode 19</h5>
                </div>
              </div>
            </div>
          </div>
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
         <button type="submit" class="btn">Compartir</button>
        </div> 
      </div>
     </div>
   </div>
 </section>
  `;
  return article;
};
