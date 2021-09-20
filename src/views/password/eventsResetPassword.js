<<<<<<< HEAD:src/db/reset-password.js
/* eslint-disable no-undef */
import { resetPassword } from "../firebase.js";
=======
import { resetPassword } from '../../db/firebase-auth.js'
>>>>>>> 47be7dde476ce5b49a62308ffdc2f3ecc328f508:src/views/password/eventsResetPassword.js
const addEventResetPassword = () => {

    const btnResetPassword = document.querySelector('#btn-resetPassword');
    const msgSendEmail = document.querySelector('#msgSendEmail');
    const errorReset = document.querySelector('#errorReset');
    const emailReset = document.querySelector('#emailReset'); //input EMAIL

    btnResetPassword.addEventListener('click', () => {
<<<<<<< HEAD:src/db/reset-password.js
        //function de firebase para que envie el email
        const emailReset = document.querySelector('#emailReset').value; //input EMAIL
        if (emailReset !== "") { //valor adentro
=======
        if (emailReset.value !== "") { //valor adentro
>>>>>>> 47be7dde476ce5b49a62308ffdc2f3ecc328f508:src/views/password/eventsResetPassword.js
            resetPassword(emailReset).then(() => { //reutilizar PROMESA
                msgSendEmail.innerHTML = 'Se envió el correo satisfactoriamente, favor de verificar :)';
            }).catch((err) => {
                const error = err.code;
                if (error === 'auth/user-not-found') { /* Erro que envia firebase cuando el usuario no esta registrado */
                    errorReset.innerHTML = 'Email no registrado';
                }
            });
            emailReset.value = ""; //limpia
            errorReset.innerHTML = "";
        } else {
            errorReset.innerHTML = "No ha escrito ningún correo"; //no hay nada sale un error
        }
    })
}
export { addEventResetPassword };