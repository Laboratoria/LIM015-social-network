export default () => {
  const sectionError = document.createElement('section');
  const viewDifferent = `
    <section class="error-page">
    <figure class="img-err"><img src="img/error400.png" alt="imagen del error 400"></figure>
    <section class="error-text">
      <h2 class="error-400">404</h2>
      <h1 class="not-found">Página no encontrada</h1>
      <p>El archivo especificado no se encontró en este sitio web. Por favor, 
      compruebe la URL para errores y vuelva a intentarlo.</p>
      <a href="#/" id="registrate" class="btn-register">Home.</a>

      </section>
    </section>
        `;

  sectionError.innerHTML = viewDifferent;
  sectionError.setAttribute('class', 'contenedor-Error');
  return sectionError;
};
