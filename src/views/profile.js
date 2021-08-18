export const PROFILE = () => {
  const view = `
  <section>
    <figure>
      <img src="../images//photoProfile2.jpeg" alt="photoProfile" />
    </figure>
    <p id='nameProfile'>Luana Cevallos</p>
    <p id='status'>Estado: Viajera Empedernida</p>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  // FUNCIONALIDAD
  
  return divElement;
};
