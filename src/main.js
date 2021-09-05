// Este es el punto de entrada de tu aplicacion

<<<<<<< HEAD
import { myFunction } from './lib/index.js';
   
myFunction();
=======
//import { myFunction } from './lib/index.js';

import { changeView } from './view-controler/indexControler.js'; 



//myFunction();


const init = () => {
window.addEventListener('hashchange', (e) => {
    e.preventDefault();
    changeView(window.location.hash)
})
};

window.addEventListener('load', init);
>>>>>>> 52969a81d4d4ad8c7372a02d4c6562f9b4fb02fe
