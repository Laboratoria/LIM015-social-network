// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

import { changeView } from './view-controler/router.js';

//myFunction();

const init = () => {
    changeView(window.location.hash)
    window.addEventListener('hashchange', (e) => {
        e.preventDefault();
        changeView(window.location.hash)
    })
};
window.addEventListener('load', init);



