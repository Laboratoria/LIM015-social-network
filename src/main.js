import { changeView } from './router.js';
import fsConfig from './scripts/fs-config.js';

const init = () => {
  fsConfig();
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
