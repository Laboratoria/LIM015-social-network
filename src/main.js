// eslint-disable-next-line import/no-unresolved
import { changeView } from './controller/router.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
