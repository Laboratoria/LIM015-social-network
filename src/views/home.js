export default () => {
  const main = document.querySelector('.container');
  const article = document.createElement('article');
  article.className = 'home';
  article.innerHTML = `
  <section class="top-section">
    <header class="home-header">
      <h2>Tomodachi</h2>
      <div class="icons">
        <i class="fas fa-home"></i>
        <i class="fas fa-user"></i>
        <i class="fas fa-sign-out-alt"></i>
      </div>
    </header>
    <section class="bottom-section">
      <aside class="home-sidebar">
        <div class="user-container">
          <h3>Usuario :3</h3>
        </div>
        <div class="animes-container">
          <h2>Animes Populares:</h2>
          <div class="posters-container">
            <h1>snk</h1>
            <h1>kny</h1>
            <h1>tr</h1>
            <h1>jojo's</h1>
          </div>
        </div>
      </aside>
      <article>
       <textarea class="form-control" placeholder="¿Qué quieres compartir?"></textarea>
       <button type="submit" class="btn-share">Compartir</button>
       <div class="posts">
       </div>
      </article>
   </section>
  </section>
  `;
  main.appendChild(article);
};
