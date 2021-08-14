// Constante a exportar
export const TIMELINE = () => {
  const view = `
  <section>
    <figure>
      <img src="../images//photoProfile2.jpeg" alt="photoProfile" />
    </figure>
    <p id='nameProfile'>Luana Cevallos</p>
    <p id='status'>Estado: Viajera Empedernida</p>
  </section>
  <div class='publication'>
    <textarea name='publication' id='textAreaPublication' class='textAreaPublication' placeholder='¿Qué deseas compartir con la comunidad de viajeros?' cols='30' rows='10'></textarea>
    <div class='buttons'>
      <button id='buttonImg' type='button' class='buttonImg'>&#xf009</button>
    </div>
    <div class='buttons'>
      <button id='buttonShare' type='submit' class='buttonShare'>Share</button>
    </div>
  </div>
  <section>
    <div class='postMessage'>
      <div>
        <p>Post by<span id='userNamePost'></span></p>
        <span id='closeItem'><i class="fas fa-times-circle"></i></span>
      </div>
      <div id='postContent'></div>
      <div id='reactionPost'>
        <span><i class="fas fa-heart"></i></span>
        <span><i class="fas fa-share-square"></i></span>
      </div>
    </div>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
