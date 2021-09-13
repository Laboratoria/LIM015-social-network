import { validInput, limpiar } from '../validations/validInputs.js'
import { alerts, alertProcess } from '../alerts/alerts.js';
import { saveUser } from './CRUD/CREATE/register-user.js';

const addEventRegisterUser = () => {
    const formRegister = document.querySelector('#form-registro');
    const inputName = document.querySelector('#nameUser');
    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');
    const inputConfirmPassword = document.querySelector('#confirmPassword');
    const showPassword = document.querySelector('#show-password');

    formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        alertProcess(true); //mostramos alerta con gif
        limpiar(['nameUser', 'email', 'password', 'confirmPassword']); //limpiamos mensajes span 
        const email = inputEmail.value;
        const password = inputPassword.value;
        const nameuser = inputName.value;
        // eslint-disable-next-line no-undef
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alertProcess(false); //ocultamos alerta con gif
                console.log(userCredential);
                saveUser([email, nameuser, 'user.jpg']); //almacenar en firestore los datos del usuario
                alerts('success', 'Bienvenido') //mostramos alerta de exito
                window.location.href = "#/timeline";
            }).catch((error) => {
                alertProcess(false);
                const errorCode = error.code;
                if (errorCode == 'auth/email-already-in-use') {
                    validInput('email', 'El correo electrónico ya está registrado', 'error');
                } else {
                    alerts('error', error.code) //mostramos alerta de error
                }
            });

    });

    /** Para mostrar password, dando click en el icon eye**/
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


    /** Reglas de Validacion **/

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

export { addEventRegisterUser }