// Este es el punto de entrada de tu aplicacion
import {changeView} from"./view-controller/index.js"


const initialization= () => {
    const firebaseConfig = {
        apiKey: "AIzaSyArJDNhJXShcMtXkp_PsOCvJXz6MDygWvs",
        authDomain: "pets-lovers-561e8.firebaseapp.com",
        projectId: "pets-lovers-561e8",
        storageBucket: "pets-lovers-561e8.appspot.com",
        messagingSenderId: "392181922252",
        appId: "1:392181922252:web:1b63378406472e287c8569",
        measurementId: "G-2KVQK63381"
      };
      firebase.initialization(firebaseConfig);
}

const init =()=>{
    //console.log('init')
    window.addEventListener('hashchange', ()=> changeView(window.location.hash))
    
}

//window.onload= init();

window.addEventListener('load',init)
