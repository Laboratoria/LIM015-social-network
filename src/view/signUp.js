export const signUp = () => {
  const viewSignUp = `
    <section>
    <h2>Regístrate</h2>
    <form>
        <input type="text" placeholder="Nombre"><br>
        <input type="email" placeholder="Correo electrónico"><br>
        <input type="password" placeholder="Contraseña"><br>
        <input type="submit" value="Crear cuenta"><br>
    </form>
    <ul>
        <li>
        <a href="#/SignIn">¿Tiene cuenta? Inicia con ella</a>
        </li>
    </ul>
    </section>`;
  const divElemento = document.createElement('div');
  divElemento.innerHTML = viewSignUp;
  return divElemento;
};
