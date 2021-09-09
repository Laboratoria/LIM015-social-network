import { validInput, limpiar } from '../validations/validInputs.js'
import { alerts, alertProcess } from '../alerts/alerts.js';

const addEventRegisterUser = (formRegistro) => {
    const inputName = formRegistro.querySelector('#nameUser');
    const inputEmail = formRegistro.querySelector('#email');
    const inputPassword = formRegistro.querySelector('#password');
    const inputConfirmPassword = formRegistro.querySelector('#confirmPassword');

    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault();
        alertProcess(true); //mostramos alerta con gif
        limpiar(formRegistro, ['nameUser', 'email', 'password', 'confirmPassword']); //limpiamos mensajes span 
        const email = inputEmail.value;
        const password = inputPassword.value;
        // eslint-disable-next-line no-undef
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alertProcess(false); //ocultamos alerta con gif
                alerts('success', 'registro exitoso') //mostramos alerta de exito
                console.log(userCredential); // tiene redirige a inicio
            }).catch((error) => {
                alertProcess(false);
                const errorCode = error.code;
                if (errorCode == 'auth/email-already-in-use') {
                    validInput(formRegistro, 'email', 'El correo electrónico ya está registrado', 'error');
                } else {
                    alerts('error', error.code) //mostramos alerta de error
                }
            });

    });

    /** Reglas de Validacion **/

    inputName.addEventListener('change', () => {
        if (inputName.value.length < 3 || inputName.value == null) {
            validInput(formRegistro, 'nameUser', 'El nombre debe tener minimo 3 caracteres', 'error');
        } else {
            validInput(formRegistro, 'nameUser', 'Ok', 'success');
        }
    });

    inputEmail.addEventListener('change', () => {
        const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (regex.test(inputEmail.value)) {
            validInput(formRegistro, 'email', 'Ok', 'success');
        } else {
            validInput(formRegistro, 'email', 'El correo ingresado no es valido', 'error');
        }
    });

    inputPassword.addEventListener('change', () => {
        if (inputPassword.value.length < 6 || inputPassword.value == null) {
            validInput(formRegistro, 'password', 'La contraseña es muy corta (Mínimo 6 caracteres)', 'error');
        } else {
            validInput(formRegistro, 'password', 'Ok', 'success');
        }
    });

    inputConfirmPassword.addEventListener('change', () => {
        if (inputConfirmPassword.value == inputPassword.value) {
            validInput(formRegistro, 'confirmPassword', 'Ok', 'success');
        } else {
            validInput(formRegistro, 'confirmPassword', 'Las contraseñas no coinciden', 'error');
        }
    });

}

export { addEventRegisterUser }