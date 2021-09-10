import { currentUser } from '../scripts/auth.js';

export default (userX) => {
  const viewCommunity = document.createElement('section');
  const isUser = (user) => {
    if (user || user !== null) {
      viewCommunity.classList.add('container-community');
      viewCommunity.innerHTML = `
          <section>
            <p> main page works ok... 😉</p>
            <h2 id="name"> ${userX.username}</h2>
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
