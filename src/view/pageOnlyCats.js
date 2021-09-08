export const pageOnlyCats = () => {
  const pageOcView = `
  <div class="home-container">
    <h2>Bienvenidx a OnlyCats </h2> <br>
      <img src='https://cdn.memegenerator.es/descargar/15315146' width=230px>
    </div>`;
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = pageOcView;
  return sectionElement;
};
