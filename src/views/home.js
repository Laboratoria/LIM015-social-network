export const HOME = () => {
  const view = ` 
  <div class="contentHome">
    <div class="contentInfo">
      <p class="homeInfo">Sabemos que la pandemia ha dejado estragos en todos y nos ha privado de una de las cosas que mas nos gusta hacer que es viajar, y que mejor que una red social para compartir experiencias ¿no? es aquí donde nace LA RUTA, para volvernos a conectar con nuestros paisajes compartiendo las mejores experiencias con otros usuarios y la clave es el ahorro!
      </p>
        <button id='btnStart' type="button" class='btnStart empezar'>Empezar</button>
    </div>
    <div class="contentImgHome">
      <img src="../images/home.png" alt="imagenHome" class="imgHome">
    </div>
  </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  // Constantes globales
  const btnStart = divElement.querySelector('#btnStart');
  // ------------------------- ESCONDER RESTO DE LINKS -------------------------
  document.querySelector('.profile a').style.display = 'none';
  document.querySelector('.timeline a').style.display = 'none';
  document.querySelector('.logOut a').style.display = 'none';
  // ------------------------- Boton Empezar -------------------------
  btnStart.addEventListener('click', () => {
    window.location.hash = '#/login';
  });
  // AQUI TERMINA
  return divElement;
};
