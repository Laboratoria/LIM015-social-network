export const timeline = () => {
  const view = `
  <p>Pagina del muro</p>
  <div class='publication'>
    <textarea name="publication" id="textAreaPublication" class='textAreaPublication' placeholder="¿Qué deseas compartir con la comunidad de viajeros?" cols="30" rows="10"></textarea>
      <div class="buttons">
    <button id='buttonShare' type='submit' class='buttonShare'>Share</button>
  </div>
  </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
