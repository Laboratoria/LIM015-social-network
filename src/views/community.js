export default () => {
  const article = document.createElement('article');
  article.className = 'home';
  article.innerHTML = `
  <section class="muro" id="muro">
  <div class="contenedor">
    <div class="muro-box">
      <div class="muro-info">
        <h3 class="title">Bienvenidx</h3>
        <div class="information">
          <div class="contact-img">
            <img src="./images/user.jpg" alt="" />
          </div>
          <p class="info-text">name</p>
        </div>
        <hr>
        <h2 class="text-anime">
          Animes populares
        </h2>
        <div class="img-wrap">
          <div class="grid-item">
            <div class="gallery-image">
              <img src="./images/port3.jpg" alt="" />
              <div class="img-overlay">
                <div class="img-description">
                  <h3>JOJO'S</h3>
                  <h5>5th Season</h5>
                </div>
              </div>
            </div>
          </div> 
          <div class="grid-item">
            <div class="gallery-image">
              <img src="./images/port4.png" alt="" />
              <div class="img-overlay">
                <div class="img-description">
                  <h3>Demon Slayer</h3>
                  <h5>Movie</h5>
                </div>
              </div>
            </div>
          </div>  
          <div class="grid-item">
            <div class="gallery-image">
              <img src="./images/port1.png" alt="" />
              <div class="img-overlay">
                <div class="img-description">
                  <h3>Attack on Titan</h3>
                  <h5>Final Season</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="gallery-image">
              <img src="./images/port2.png" alt="" />
              <div class="img-overlay">
                <div class="img-description">
                  <h3>Tokio Revengers</h3>
                  <h5>Episode 19</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="muro-form">
        <h3 class="title">Postea ♥ :</h3>
        <div class="column">
           <textarea
            name="message"
            class="contact-input textarea"
            placeholder="¿Qué quieres compartir?"></textarea>
        </div>
        <div class="btn-share">
        <button type="submit" class="btn">Compartir</button></div> 
      </div>
    </div>
  </div>
</section>
  `;
  return article;
};
