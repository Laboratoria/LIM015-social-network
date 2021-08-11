export const notFound = () => {
  const view = `
  <p>Error 404</p>
  <img src='../images/erro-404-desktop-01.png'/>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
