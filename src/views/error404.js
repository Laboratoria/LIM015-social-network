export const NOTFOUND = () => {
  const view = `
  <p class='error404'>Ups! Página no encontrada!</p>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
