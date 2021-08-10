import { auth } from './scripts/fs-config.js';

const init = () => {
  window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
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
