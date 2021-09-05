export const logInTemplate = () => {
  const sectionLogIn = document.createElement('section');
  const templateLogIn = `
  <section>
    <h1>ONLY CATS</h1>
    <p>Conecta con otras personas amantes de los gatos en una web completamente tematizada.
      Comparte experiencias, fotos y más. Únete</p>
    <nav>
      <ul>
    
        <li>
          <a>Regístrate</a>
        </li>
    
        <li>
          <a>Iniciar Sesión</a>
        </li>
      </ul>
    </nav>
    </section>
  `;
  sectionLogIn.innerHTML = templateLogIn;
  return sectionLogIn;
};
