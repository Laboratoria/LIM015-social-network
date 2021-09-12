/* eslint-disable no-undef */
import { alerts } from '../alerts/alerts.js';

const addEventRegisterUserGoogle = () => {
    const btnGoogle = document.querySelector('#google');
    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault();

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const credential = result.credential;
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const avatar = result.user.photoURL; //almacenar en la BD
                console.log(token, user, avatar)
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