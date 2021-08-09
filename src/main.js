import { changeView } from './controller/router.js';

const initialize = () => {
  changeView(window.location.hash)
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', initialize);
