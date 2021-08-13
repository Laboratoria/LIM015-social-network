export const PROFILE = () => {
  const view = `
  <section class='contenedorProfile'>
    <img src='../images/photoProfile2.jpeg' alt='photo profile' />
    <p>Luana</p>
    <p>Estado: Ocupada!</p>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
