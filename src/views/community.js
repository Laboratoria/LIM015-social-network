import { currentUser } from '../scripts/auth.js';

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


          <section>
            <p> main page works ok... 😉</p>
            <h2 id="name"> ${userX.username}</h2>
            <img class="avatar" src="${userX.photo}"/>
          </section>
          `;
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
