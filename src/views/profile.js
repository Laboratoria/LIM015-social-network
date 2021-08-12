import { currentUser } from '../firebase/autenticacion.js';

export default () => {
  const sectionProfile = document.createElement('section');

  const template = `
    <section id="contenedorProfile" class="contenedorProfile">

      <header>
          <img class="logo-ibook" src="img/logo-ibook.png" width="160px" alt="logo de iBook"/>
          <nav class="nav-bar" id="nav">
            <ul>
                <li><a href="#/home">HOME</a></li>
                <li class="current-user"><a href="#/profile">PROFILE</a></li>
                <li><a href="#/" id="signOut" >SIGN-OUT</a></li>
            </ul>
          </nav>
      </header>

      <section class="edit-profile">
        <section class="user-prof">
          <figure class="user-img"> <img class="img-perfil" src='${currentUser().photoURL}'/> </figure>
            <form class="profile-view">
              <span>Nombres</span>
              <input type="text" class="registro" id="nombres" placeholder="${currentUser().displayName}" disabled>

              <span>Correo Electronico</span>
              <input type="text" class="registro" id="nombres" placeholder="${currentUser().email}" disabled>

              <input type="submit" href="#/home" class="registro" value="Guardar cambios">
            </form>
        </section>
    </section>
  `;

  sectionProfile.innerHTML = template;
  sectionProfile.setAttribute('class', 'contenedorView1');

  return sectionProfile;
};
