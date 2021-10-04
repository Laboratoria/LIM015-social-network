/* eslint-disable no-undef */

import { changeView } from './view-controler/route.js'

const init = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        changeView(window.location.hash);
        } else {
        window.location.hash = '/';
        }
    });
/*     changeView(window.location.hash);
 */
};
window.addEventListener('hashchange', init);

window.addEventListener('load', init);