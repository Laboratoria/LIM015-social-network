export const HOME = () => {
  const view = `
  <img src='../images/laRuta-02.png' alt='La Ruta Logo'/>
  <p>We know that the pandemic has wreaked havoc on everyone and deprived us of one of the things we like to do the most, which is travel, and what better than a social network to share experiences, right? This is where LA RUTA was born, to reconnect with our landscapes by sharing the best experiences with other users and the key is saving!</p>
  `
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
