export const notFound = () => {
  const view = `
  <div class='error404'></div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
