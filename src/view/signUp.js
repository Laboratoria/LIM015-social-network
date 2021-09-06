export const signUp = () => {
  const viewSignUp = `
    <section  class="home-container">
      <h2>Regístrate</h2>
      <form>
          <input type="text" placeholder="Nombre"><br>
          <input type="email" placeholder="Correo electrónico"><br>
          <input type="password" placeholder="Contraseña"><br>
          <input type="submit" value="Crear cuenta" class="start-button"><br>
      </form>
      <ul class="home-list">
        <li>
          <a href="#/SignIn">¿Tiene cuenta? Inicia con ella</a>
        </li>
      </ul>
    </section>`;
  const divElement = document.createElement('div');
  divElement.classList.add('container-box');
  divElement.innerHTML = viewSignUp;
  return divElement;
};
