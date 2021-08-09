export const notFound = () => {
  const view = `
  <p>Oops! page not found</p>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
