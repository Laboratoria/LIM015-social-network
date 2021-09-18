/* eslint-disable no-undef */
import { alerts } from '../alerts/alerts.js';
import { saveUser } from './crud/createUser.js';
import { loginGoogle } from '../firebase.js';

const addEventRegisterUserGoogle = () => {
    const btnGoogle = document.querySelector('#google');
    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault();
            loginGoogle().then((result) => {
                localStorage.setItem('iduser', result.user.uid);
                saveUser([result.user.uid, result.user.email, result.user.displayName, result.user.photoURL]);
                alerts('success', 'Bienvenido') //mostramos alerta de exito
                window.location.href = "#/timeline";
            }).catch((error) => {
                const errorMessage = error.code;
                alerts('error', errorMessage) //mostramos alerta de error 
            });
    })
}

export { addEventRegisterUserGoogle };