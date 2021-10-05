import { validInput, limpiar } from '../../lib/validInputs.js'
import { alerts, alertProcess } from '../../lib/alerts.js';
import { loginEmail, loginGoogle } from '../../db/firebase-auth.js';
import { saveUser, getUser } from '../../db/firestore.js';

const addEventsLogin = () => {
    const formLogin = document.querySelector('#form-login');
    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');
    const showPassword = document.querySelector('#show-password');
    const btnGoogle = document.querySelector('#google');
    //Auth with email and password

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = inputEmail.value;
        const password = inputPassword.value;
        alertProcess(true); //mostramos alerta con gif
        limpiar(['email']); //limpiamos los input de borde rojo
        loginEmail(email, password) //loginEmail retorna el firebase.auth().with....
            .then((result) => {
                responseOk(result, false); //es false porque no es google
            })
            .catch((error) => {
                responseError(error);
            });
    });

    //Auth o Register with Google

    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        loginGoogle()
            .then((result) => {
                responseOk(result, true);
            }).catch((error) => {
                responseError(error);
            });
    })

    /** Para mostrar password, dando click en el icon eye**/
    showPassword.addEventListener('click', () => {
        if (inputPassword.type === "text") {
            showPassword.classList.remove('fa-eye');
            showPassword.classList.add('fa-eye-slash');
            inputPassword.type = "password";
        } else {
            showPassword.classList.remove('fa-eye-slash');
            showPassword.classList.add('fa-eye');
            inputPassword.type = "text";
        }
    });
}


async function responseOk(result, google) {
    alertProcess(false); //ocultamos alerta con gif
    localStorage.setItem('iduser', result.user.uid); //almacenar el id del usuario autenticado en local
    if (google) { //es decir que se esta autenticando con google y puede ser nuevo
        const infoUserProfile = await getUser(result.user.uid).then(response => response.data());
        if (infoUserProfile == "" || infoUserProfile == null || infoUserProfile == undefined) {
            saveUser([result.user.uid, result.user.email, result.user.displayName, result.user.photoURL]);
        }

        alerts('success', 'Bienvenido') //mostramos alerta de exito
        window.location.href = "#/timeline"; //redireciona al timeLine  
    } else {
        if( result.user.emailVerified === true ) {
            window.location.hash = '#/timeline';
            alerts('success', 'Bienvenido'); //mostramos alerta de exito
        } else {
            alerts('info', 'Te hemos enviado un email para verificar tu cuenta');
        }
    } 
}

function responseError(error) {
    alertProcess(false); //ocultamos alerta con gif
    const errorCode = error.code;
    /* console.log(errorCode) */
    switch (errorCode) { //falta existente
        case 'auth/wrong-password':
        case 'auth/user-not-found':
            validInput('email', 'Usuario y/o contraseña incorrecta', 'error');
            break;
        case 'auth/invalid-email':
            validInput('email', 'La dirección de correo electrónico no es válida', 'error');
            break;
        case 'auth/email-already-in-use':
            validInput('email', 'La dirección de correo electrónico ya esta en uso', 'error');
            break;
        case 'auth/too-many-requests':
            alerts('error', 'Muchos intentos,vuelva a intentarlo mas tarde');
            break;
        default:
            alerts('error', error.code) //mostramos alerta de error
    }
}

export { addEventsLogin }