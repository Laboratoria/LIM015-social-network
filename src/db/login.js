import { validInput, limpiar } from '../validations/validInputs.js'
import { alerts, alertProcess } from '../alerts/alerts.js';
const addEventLogin = () => {
    const formLogin = document.querySelector('#form-login');
    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');
    const showPassword = document.querySelector('#show-password');

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        alertProcess(true); //mostramos alerta con gif
        limpiar(['email']); //limpiamos mensaje span 
        const email = inputEmail.value;
        const password = inputPassword.value;
        // eslint-disable-next-line no-undef
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                alertProcess(false); //ocultamos alerta con gif
                localStorage.setItem('iduser', result.user.uid); //almacenar el id en local
                window.location.href = "#/timeline";
            })
            .catch((error) => {
                alertProcess(false); //ocultamos alerta con gif
                const errorCode = error.code;
                switch (errorCode) {
                    case 'auth/wrong-password':
                    case 'auth/user-not-found':
                        validInput('email', 'Usuario y/o contraseña incorrecta', 'error');
                        break;
                    case 'auth/invalid-email':
                        validInput('email', 'La dirección de correo electrónico no es válida', 'error');
                        break;
                    case 'auth/too-many-requests':
                        alerts('error', 'Muchos intentos,vuelva a intentarlo mas tarde');
                        break;
                    default:
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
        } else {
            showPassword.classList.remove('fa-eye-slash');
            showPassword.classList.add('fa-eye');
            inputPassword.type = "text";
        }
    });
}


export { addEventLogin }