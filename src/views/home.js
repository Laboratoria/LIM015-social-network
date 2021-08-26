export const HOME = () => {
  const view = ` 
  <div class="contentHome">
    <div class="contentInfo">
      <p class="homeInfo"> Viaja  &#x1f304; Disfruta &#x1f453; Comparte &#x1f450;
      </p>
      <div class="contentBtn">
        <button id='btnStart' type="button" class='buttonStart'>Empezar</button>
      </div>
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
