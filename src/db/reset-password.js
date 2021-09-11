/* eslint-disable no-undef */
const addEventResetPassword = (formReset) =>{
    const btnResetPassword = formReset.querySelector('#btn-resetPassword');
    const msgSendEmail = formReset.querySelector('#msgSendEmail');
    const errorReset = formReset.querySelector('#errorReset');

    btnResetPassword.addEventListener('click', () =>{
        //function de firebase para que envie el email
        const resetPassword = (emailLogin) => firebase.auth()
        .sendPasswordResetEmail(emailLogin); //CALLBACK

        const emailReset = formReset.querySelector('#emailReset').value; //input EMAIL
        if(emailReset !== ""){//valor adentro
            resetPassword(emailReset).then(()=>{//reutilizar PROMESA
                msgSendEmail.innerHTML = 'Se envió el correo satisfactoriamente, favor de verificar :)';
            }).catch((err) =>{
                const error = err.code;
                if(error === 'auth/user-not-found'){/* Erro que envia firebase cuando el usuario no esta registrado */
                    errorReset.innerHTML = 'Email no registrado';
                }
            });
        formReset.querySelector('#emailReset').value=""; //limpia
        errorReset.innerHTML="";//limpia
        }else{
            errorReset.innerHTML="No ha escrito ningún correo"; //no hay nada sale un error --FALTA ALERTAS
        }
    })
}
export{addEventResetPassword};