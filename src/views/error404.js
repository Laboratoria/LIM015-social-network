export const NOTFOUND = () => {
  const view = `
  <section class='errorSection'>
  <p class='error404'>Ups! Página no encontrada!</p>
  <img class='errorImg' src='../images/errorBg.png' />
  <p>Selecciona alguna de las opciones disponibles &#9757;</p>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
