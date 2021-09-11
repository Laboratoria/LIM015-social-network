import { currentUser, signOut } from '../scripts/auth.js';

export default (userX) => {
  const viewCommunity = document.createElement('section');
  const isUser = (user) => {
    if (user || user !== null) {
      viewCommunity.classList.add('container-community');
      viewCommunity.innerHTML = `
     

      <section class="main-header">
      <nav>
          <ul class="menu-header">
              <div id="left-menu-header" class="box">
                  <li class="home-header"><a href="#/community"><i class="fas fa-home"></i></a></li>
                  <li class="profile-header"><a href="#/profile"><i class="fas fa-user-circle"></i></a></li>
              </div>
              <li class="title-header box"><a href="#/community">Skyy </a></li>
              <li id="log-out-header" class="box"><span id="btn-singOut"><i class="fas fa-sign-out-alt"></i></span></li>
          </ul>
      </nav>
      <i id="hamburger-menu" class="fas fa-bars hide"></i>
       </section>

<section id="main-content">
          <section class="container-user-details-left">
            <p> Welcome back... 😉</p>
            <h2 id="name"> ${userX.username}</h2>
            <img class="avatar" src="${userX.photo}"/>
          </section>

 
          <main class="home-section">
          <!-- Post -->
          <div class="create-post">
            <div class="user">
              <img class="avatar-post" src="${userX.photo}"/>
              <p class="name">${userX.username}</p>
            </div>
            <div class="content-newpost">
              <form id = "form-post">
                <textarea class="text-newpost" placeholder="¿What do you want to share today?" spellcheck="false" required></textarea>
                <img id="post-img" class="post-img" src=""/>
                <div class="buttons-bar">
                  <label for="upload-img">
                    <input type="file" accept="image/jpeg, image/png, image/gif" id="upload-img" class="upload-img">
                    <i class="far fa-file-image"><span class="tooltiptext">Upload an image</span></i>
                  </label>
                  <button type="submit" id="btn-post" class="btn-post" ><i class="fas fa-paper-plane"></i> Share</button>
                </div>
              </form>
            </div>
          </div>

          <section id="container-post"></section>
         
         </main>

        </section>

          `;
      const hamburgerBotton = viewCommunity.querySelector('#hamburger-menu');
      const homeNav = viewCommunity.querySelector('#left-menu-header');
      const singOut = viewCommunity.querySelector('#log-out-header');
      hamburgerBotton.addEventListener('click', () => {
        homeNav.classList.toggle('active');
        singOut.classList.toggle('active');
      });

      // Función para cerrar sesión
      const btnSignOut = viewCommunity.querySelector('#btn-singOut');
      btnSignOut.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '';
        signOut();
      });
    } else {
      window.location.hash = '#/';
    }
  };
  currentUser(isUser);
  return viewCommunity;
};

// var user = firebase.auth().currentUser;

// if (user) {
// User is signed in.
// } else {
// No user is signed in.
// }
