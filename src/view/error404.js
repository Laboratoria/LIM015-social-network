export const error = () => {
  const viewError = `
  <div>
  <h1> Ups . . . </h1>
  </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewError;
  return divElement;
};
