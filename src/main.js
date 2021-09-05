// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

import { changeView } from './view-controler/router.js';



//myFunction();

const init = () => {
<<<<<<< HEAD
    changeView(window.location.hash)
window.addEventListener('hashchange', (e) => {
    e.preventDefault();
=======
>>>>>>> 8c5fd1e8996fe4252768bd10b204e3fb02f9972e
    changeView(window.location.hash)
    window.addEventListener('hashchange', (e) => {
        e.preventDefault();
        changeView(window.location.hash)
    })
};

window.addEventListener('load', init);
