/* eslint-disable no-undef */
import { alerts } from '../alerts/alerts.js';
import { saveUser } from './collections/register-user.js';

const addEventRegisterUserGoogle = () => {
    const btnGoogle = document.querySelector('#google');
    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault();

        const provider = new firebase.auth.GoogleAuthProvider();
        const email = provider.addScope('email');
        console.log('this', email);
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                alerts('success', 'Bienvenido') //mostramos alerta de exito
                saveUser([email, result.displayName, result.user.photoURL]);
                window.location.href = "#/timeline";
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                alerts('error', errorMessage) //mostramos alerta de error 
            });
    })
}

export { addEventRegisterUserGoogle };