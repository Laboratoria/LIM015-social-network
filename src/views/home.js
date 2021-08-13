export const HOME = () => {
  const view = `
  <img src='../images/laRuta-02.png' alt='La Ruta Logo'/>
  <p>Sabemos que la pandemia ha dejado estragos en todos y nos ha privado de una de las cosas que mas nos gusta hacer que es viajar, y que mejor que una red social para compartir experiencias ¿no? es aquí donde nace LA RUTA, para volvernos a conectar con nuestros paisajes compartiendo las mejores experiencias con otros usuarios y la clave es el ahorro!</p>
  <button id='btnStart' type="button" class='btnStart'>Empezar</button>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  // Constantes globales
  const btnStart = divElement.querySelector('#btnStart');
  // ------------------------- Boton Empezar -------------------------
  btnStart.addEventListener('click', () => {
    window.location.hash = '#/login';
  });
  // AQUI TERMINA
  return divElement;
};
