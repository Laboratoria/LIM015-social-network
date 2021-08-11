export default () => {
  const article = document.createElement('article');
  article.className = 'home';
  article.innerHTML = `
  <section class="bottom-section">
  <aside class="home-sidebar">
   <div class="user-container">
     <div class="img">
       <img class="waifu" src="https://i.ibb.co/vsYdG3b/gfx.jpg" alt=""></div>
       <div><p>Mima-chan xd</p></div>
       </div>
    
     <div class="animes-container">
     <div class="title-anime">
      <h2>Animes Populares:</h2></div>
       <div class="posters-container">
       <div class="single-image"><a href="#"><img src="https://i.ibb.co/GcqryV3/snk/1.png"></a></div>
       <div class="single-image"><a href="#"><img src="https://i.ibb.co/4P36SxK/kny/2.png"></a></div>
       <div class="single-image"><a href="#"><img src="https://i.ibb.co/Cz0H5Ln/tr/3.png"></a></div>
       <div class="single-image"><a href="#"><img src="https://i.ibb.co/gS7cFf9/jojo/4.png"></a></div>
    </div>
  </div>
</aside>
<article class="post">
  <div class="post-txt">
    <textarea class="txt" rows="6" placeholder="¿Qué quieres compartir?">                      </textarea>
    <button type="submit" class="btn-share">Compartir</button></div>
 <div class="posts">
 </div>
</article>
</section>
  `;
  return article;
};
