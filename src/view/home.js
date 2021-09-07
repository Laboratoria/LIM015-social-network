export const home = () => {
  const viewHome = `
    <section class="home-container">
      <figure>
        <img src="./img/only-cats.png" "alt='only-cats' class="home-img">
      </figure>
      <p class="home-info">
        Conecta con otras personas amantes de los gatos en una web completamente tematizada.
        Comparte experiencias, fotos y más. Únete.
      </p>
      <nav>
        <ul class="home-list">
          <li class="home-items">
            <a href="#/SignIn" class="links-items">Iniciar Sesión</a>
          </li>
          <li class="home-items">
            <a href="#/SignUp" class="links-items">Regístrate</a>
          </li>
        </ul>
      </nav>
    </section>`;
  const divElement = document.createElement('div');
  divElement.classList.add('container-box');
  divElement.innerHTML = viewHome;
  return divElement;
};
