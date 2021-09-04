export const sign = () => {
  const viewSignIn = `<section>
  <figure></figure>
  <form>
    <input type="email" placeholder="Ingrese e-mail">
    <input type="password" placeholder="Ingrese contraseña">
    <input type="submit" value="Iniciar">
  </form>
  <ul>
    <li>
      <a href="#/google">Acceder con Google</a>
    </li>
    <li>
      <a href="#/registrate">Crear cuenta</a>
    </li>
  </ul>
</section>`;
  const divElemento = document.createElement('div');
  divElemento.innerHTML = viewSignIn;
  return divElemento;
};
