import { validInput, limpiar } from '../validations/validRegistro.js'
const addEventRegisterUser = (formRegistro) => {
    const inputName = formRegistro.querySelector('#nameUser');
    const inputEmail = formRegistro.querySelector('#email');
    const inputPassword = formRegistro.querySelector('#password');
    const inputConfirmPassword = formRegistro.querySelector('#confirmPassword');

    formRegistro.addEventListener('submit', (e) => {
        /** limpiamos los mensajes y mostrar un spiner de carga de proceso**/
        e.preventDefault();
        limpiar(formRegistro, ['nameUser', 'email', 'password', 'confirmPassword']);
        const email = inputEmail.value;
        const password = inputPassword.value;
        // eslint-disable-next-line no-undef
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Registrado')
                console.log(userCredential); //redirige a inicio antes limpiamos 
            }).catch((error) => {
                const errorCode = error.code;
                if (errorCode == 'auth/email-already-in-use') {
                    validInput(formRegistro, 'email', 'El correo electrónico ya está registrado', 'error');
                } else {
                    alert('Error: ' + error.message)
                }
            })

    });

    inputName.addEventListener('change', () => {
        if (inputName.value.length < 3 || inputName.value == null) {
            validInput(formRegistro, 'nameUser', 'El nombre debe tener minimo 4 caracteres', 'error');
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