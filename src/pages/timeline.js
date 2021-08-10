export const timeline = () => {
  const view = `
  <figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
  </figure>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
