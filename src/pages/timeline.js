export const timeline = () => {
  const view = `
  <p>Pagina del muro</p>
  <div>
    <textarea name="publication" id="publication" placeholder="¿Qué deseas compartir con la comunidad de viajeros?" cols="30" rows="10"></textarea>
  </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
