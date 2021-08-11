import { changeView } from './router.js';
import { auth } from './scripts/fs-config.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
};

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('auth-signin');
    init();
    document.querySelector('.container').style.display = 'none'; // acá oculto el main que contiene el login
    document.getElementById('header').style.display = 'flex'; // acá muestro el header con el navbar
  } else {
    console.log('auth-signout');
  }
});
