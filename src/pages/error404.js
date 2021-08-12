export const NOTFOUND = () => {
  const view = `
  <p class='error404'></p>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
