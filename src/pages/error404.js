export const error404 = () => {
  const view = `
  <p>Oops! page not found</p>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
