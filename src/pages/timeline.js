export const timeline = () => {
  const view = `
  <p>Pagina del muro</p>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
