export const signIn = () => {
  const viewSignIn = `
    <div class="home-container">
      <figure class="container-img">
        <img class="cat-gif" src='https://i.pinimg.com/originals/35/ce/9f/35ce9f85da291b4c1c504d8cbd37e8ee.gif'>
      </figure>
      <form>
        <input type="email" placeholder="Correo electrónico"><br>
        <input type="password" placeholder="Contraseña"><br>
        <input type="submit" value="Iniciar" class="start-button">
      </form>
      <ul class="home-list">
        <li class="access-items">
          <a href="#/google" class="access-items">Acceder con Google</a>
        </li>
        <li>
          <a href="#/SignUp" class="access-items">¿No tienes cuenta? Create una.</a>
        </li>
      </ul>
    </div>`;

  const sectionElement = document.createElement('div');
  sectionElement.classList.add('container-box');
  sectionElement.innerHTML = viewSignIn;
  return sectionElement;
};
