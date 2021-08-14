import { changeViews } from './routes/router.js';
import { firebaseWatcher } from './firebase/firebase-auth.js';
// Este es el punto de entrada de tu aplicacion
const init = () => {
  changeViews(window.location.hash);
  firebaseWatcher();
  window.addEventListener('hashchange', () => {
    changeViews(window.location.hash);
    firebaseWatcher();
  });
};

window.addEventListener('load', init);
