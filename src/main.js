import { changeView } from './router.js';
import { auth } from './scripts/fs-config.js';

const init = () => {
  // changeView(window.location.hash);
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
};

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('auth-signin');
    init();
  } else {
    console.log('auth-signout');
  }
});
