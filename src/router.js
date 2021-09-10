/* eslint-disable no-console */
import { components } from './views/components.js';
import { currentUser } from './scripts/auth.js';
import { getUserData } from './scripts/firestore.js';

const changeView = (route) => {
  const container = document.querySelector('#container');
  window.location.hash = route;
  container.innerHTML = '';

  switch (route) {
    case '':
    case '#':
    case '#/': {
      container.appendChild(components.login());
      break;
    }
    case '#/community': {
      currentUser((user) => {
        getUserData(user.uid)
          .then((doc) => {
            container.appendChild(components.community(doc.data()));
          }).catch((error) => {
            console.log(error);
          });
      });
      break;
    }
    case '#/profile': {
      currentUser((user) => {
        getUserData(user.uid)
          .then((doc) => {
            container.appendChild(components.profile(doc.data()));
          }).catch((error) => {
            console.log(error);
          });
      });
      break;
    }
    default:
      container.appendChild(components.viewDifferent());
      break;
  }
  return 0; // the code has been run successfully and
  // we terminate our main function with this return statement.
};

export { changeView };
