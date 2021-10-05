import { validInput, limpiar } from '../../lib/validInputs.js'
import { alerts, alertProcess } from '../../lib/alerts.js';
import { loginGoogle, registerEmail} from '../../db/firebase-auth.js';
import { saveUser, getUser } from '../../db/firestore.js';
import { changeView } from '../../router/router.js';
const addEventsRegister = () => {
    const formRegister = document.querySelector('#form-registro');
    const inputName = document.querySelector('#nameUser');
    const inputEmail = document.querySelector('#email-registro');
    const inputPassword = document.querySelector('#password-registro');
    const inputConfirmPassword = document.querySelector('#confirmPassword');
    const showPassword = document.querySelector('#show-password');
    const btnGoogle = document.querySelector('#google');

    //Register con email and password

    formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        alertProcess(true); //mostramos alerta con gif
        limpiar(['nameUser', 'email-registro', 'password-registro', 'confirmPassword']); //limpiamos mensajes span 
        const email = inputEmail.value;
        const password = inputPassword.value;
        const nameuser = inputName.value;

        registerEmail(email, password)
            .then((result) => {
                if ( result.user != null ) {
                    result.user.sendEmailVerification();
                }
                changeView('');
                responseOk(result, nameuser, false);
                
            }).catch((error) => {
                responseError(error);
            });
    });

    //Auth o Register with Google

    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        loginGoogle()
            .then((result) => {
                responseOk(result, '', '', true);
            }).catch((error) => {
                responseError(error);
            });
    })

    // Para mostrar password, dando click en el icon eye

    showPassword.addEventListener('click', () => {
        if (inputPassword.type === "text") {
            showPassword.classList.remove('fa-eye');
            showPassword.classList.add('fa-eye-slash');
            inputPassword.type = "password";
            inputConfirmPassword.type = "password";
        } else {
            showPassword.classList.remove('fa-eye-slash');
            showPassword.classList.add('fa-eye');
            inputPassword.type = "text";
            inputConfirmPassword.type = "text";
        }
    });


    // Reglas de Validacion para los Inputs

    inputName.addEventListener('change', () => {
        if (inputName.value.length < 3 || inputName.value == null) {
            validInput('nameUser', 'El nombre debe tener minimo 3 caracteres', 'error');
        } else {
            validInput('nameUser', 'Ok', 'success');
        }
    });

    inputEmail.addEventListener('change', () => {
        const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (regex.test(inputEmail.value)) {
            validInput('email-registro', 'Ok', 'success');
        } else {
            validInput('email-registro', 'El correo ingresado no es valido', 'error');
        }
    });

    inputPassword.addEventListener('change', () => {
        if (inputPassword.value.length < 6 || inputPassword.value == null) {
            validInput('password-registro', 'La contraseña es muy corta (Mínimo 6 caracteres)', 'error');
        } else {
            validInput('password-registro', 'Ok', 'success');
        }
    });

    inputConfirmPassword.addEventListener('change', () => {
        if (inputConfirmPassword.value == inputPassword.value) {
            validInput('confirmPassword', 'Ok', 'success');
        } else {
            validInput('confirmPassword', 'Las contraseñas no coinciden', 'error');
        }
    });


}

async function responseOk(result, nameuser, google) {
    alertProcess(false); //ocultamos alerta con gif
    localStorage.setItem('iduser', result.user.uid); //almacenar el id en local
    if (google) { //es decir que se esta autenticando con google y puede ser nuevo, para asi almacenar sus datos
        const infoUserProfile = await getUser(result.user.uid).then(response => response.data());
        if (infoUserProfile == "" || infoUserProfile == null || infoUserProfile == undefined) {
            console.log(infoUserProfile)
            saveUser([result.user.uid, result.user.email, result.user.displayName, result.user.photoURL]);
        }
        window.location.hash = '#/timeline';
        alerts('success', 'Bienvenido'); //mostramos alerta de exito
        
    } else {
        alerts('info', 'Por favor verifica tu correo electronico')
        saveUser([result.user.uid, result.user.email, nameuser, 'https://firebasestorage.googleapis.com/v0/b/prueba-marga.appspot.com/o/users%2Fuser.jpg?alt=media&token=6ae7caf2-52f4-4779-bdd5-78d25bb5c52b']);
        if( result.user.emailVerified === true ) {
            window.location.hash = '#/timeline';
            alerts('success', 'Bienvenido'); //mostramos alerta de exito
        } else {
            alerts('info', 'Por favor verifica tu email');
        }
    }
}

function responseError(error) {
    alertProcess(false);
    const errorCode = error.code;
    if (errorCode == 'auth/email-already-in-use') {
        validInput('email-registro', 'El correo electrónico ya está registrado', 'error');
    } else {
        alerts('error', error.code) //mostramos alerta de error
    }
}

export { addEventsRegister }