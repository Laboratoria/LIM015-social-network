import { validInput, limpiar } from '../../lib/validInputs.js'
import { alerts, alertProcess } from '../../lib/alerts.js';
import { loginGoogle, registerEmail } from '../../db/firebase-auth.js';
import { saveUser } from '../../db/firestore.js';

const addEventsRegister = () => {
    const formRegister = document.querySelector('#form-registro');
    const inputName = document.querySelector('#nameUser');
    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');
    const inputConfirmPassword = document.querySelector('#confirmPassword');
    const showPassword = document.querySelector('#show-password');
    const btnGoogle = document.querySelector('#google');

    //Register con email and password

    formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        alertProcess(true); //mostramos alerta con gif
        limpiar(['nameUser', 'email', 'password', 'confirmPassword']); //limpiamos mensajes span 
        const email = inputEmail.value;
        const password = inputPassword.value;
        const nameuser = inputName.value;

        registerEmail(email, password)
            .then((result) => {
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
            validInput('email', 'Ok', 'success');
        } else {
            validInput('email', 'El correo ingresado no es valido', 'error');
        }
    });

    inputPassword.addEventListener('change', () => {
        if (inputPassword.value.length < 6 || inputPassword.value == null) {
            validInput('password', 'La contraseña es muy corta (Mínimo 6 caracteres)', 'error');
        } else {
            validInput('password', 'Ok', 'success');
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

function responseOk(result, nameuser, google) {
    alertProcess(false); //ocultamos alerta con gif
    localStorage.setItem('iduser', result.user.uid); //almacenar el id en local
    if (google) { //es decir que se esta autenticando con google y puede ser nuevo, para asi almacenar sus datos
        saveUser([result.user.uid, result.user.email, result.user.displayName, result.user.photoURL]);
    } else {
        saveUser([result.user.uid, result.user.email, nameuser, 'user.jpg']);
    }
    alerts('success', 'Bienvenido'); //mostramos alerta de exito
    window.location.href = "#/timeline";
}

function responseError(error) {
    const errorCode = error.code;
    if (errorCode == 'auth/email-already-in-use') {
        validInput('email', 'El correo electrónico ya está registrado', 'error');
    } else {
        alerts('error', error.code) //mostramos alerta de error
    }
}

export { addEventsRegister }