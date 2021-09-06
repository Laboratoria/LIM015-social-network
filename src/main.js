// Este es el punto de entrada de tu aplicacion
import{changeView} from './view-controller/index.js';

const init =()=>{
    //console.log('init')
    window.addEventListener('hashchange', ()=> changeView(window.location.hash))
}

//window.onload= init();

window.addEventListener('load',init)
