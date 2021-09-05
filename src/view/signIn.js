export const signIn = () => {
  const viewSignIn = `<section>
  <figure>
  <img src='https://i.pinimg.com/originals/35/ce/9f/35ce9f85da291b4c1c504d8cbd37e8ee.gif'>
  </figure>
  <form>
    <input type="email" placeholder="Correo electrónico"><br>
    <input type="password" placeholder="Contraseña"><br>
    <input type="submit" value="Iniciar">
  </form>

  <ul>
    <li>
      <a href="#/google">Acceder con Google</a>
    </li>

    <li>
      <a href="#/SignUp">¿No tienes cuenta? Create una</a>
    </li>
  </ul>
</section>`;
  const divElemento = document.createElement('div');
  divElemento.innerHTML = viewSignIn;
  return divElemento;
};
