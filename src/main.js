/* eslint-disable no-undef */

import { changeView } from './view-controler/route.js'

const init = () => {
    //funcion para verificar si esta logueado
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            changeView(window.location.hash);
        } else {
            window.location.hash = '/';
        }
    });
    window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);