/* eslint-disable no-undef */
import { changeView } from './router/router.js'

// función que permite mostrar las vistas del usario
const init = () => {
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);