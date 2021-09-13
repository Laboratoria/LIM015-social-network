/* eslint-disable no-undef */
import { alerts } from '../alerts/alerts.js';
import { saveUser } from './CRUD/CREATE/register-user.js';

const addEventRegisterUserGoogle = () => {
    const btnGoogle = document.querySelector('#google');
    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault();

        const provider = new firebase.auth.GoogleAuthProvider();
        // const email = provider.addScope('email');
        console.log('this', email);
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                console.log(result.user.email, result.user.displayName);
                saveUser([result.user.email, result.user.email, result.user.photoURL]);
                localStorage.setItem('user', result.user.email);
                alerts('success', 'Bienvenido') //mostramos alerta de exito
                window.location.href = "#/timeline";
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                alerts('error', errorMessage) //mostramos alerta de error 
            });
    })
}

export { addEventRegisterUserGoogle };