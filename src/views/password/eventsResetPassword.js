import { resetPassword } from '../../db/firebase-auth.js'
const addEventResetPassword = () => {

    const btnResetPassword = document.querySelector('#btn-resetPassword');
    const msgSendEmail = document.querySelector('#msgSendEmail');
    const errorReset = document.querySelector('#errorReset');
    const emailReset = document.querySelector('#emailReset'); //input EMAIL

    btnResetPassword.addEventListener('click', () => {
        if (emailReset.value !== "") { //valor adentro
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