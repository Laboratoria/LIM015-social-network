/* eslint-disable indent */
/* eslint-disable semi */
export const signIn = () => {
  const divElement = document.createElement('div');
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
  </section>`
  divElement.innerHTML = viewSignIn;
  return divElement
}
