export const error = () => {
  const viewError = `
  <div>
  <h1> Ups . . . No se encontro la página </h1>
  </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewError;
  return divElement;
};
