const addEventRegisterUser = (formRegistro) => {
    const inputEmail = formRegistro.querySelector('#email');
    const inputPassword = formRegistro.querySelector('#password');
    const inputConfirmPassword = formRegistro.querySelector('#confirmPassword');

    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = inputEmail.value;
        const password = inputPassword.value;

        // eslint-disable-next-line no-undef
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Registrado')
                console.log(userCredential); //redirige a inicio
            }).catch((error) => {
                console.log(error.message); //llamara otra funcion de afterregistro y no redirigir
            })

    });

    inputConfirmPassword.addEventListener('change', () => {
        if (inputConfirmPassword.value == inputPassword.value) {
            validInput('confirmPassword', 'Ok', 'success');
        } else {
            validInput('confirmPassword', 'Las contraseñas no coinciden', 'error');
        }
    });


    function validInput(idInput, message, type) {
        const inputValid = formRegistro.querySelector('#' + idInput);
        const spanValid = formRegistro.querySelector('#msg-' + idInput);
        if (type == 'error') {
            inputValid.classList.remove('input-valid');
            inputValid.classList.add('input-invalid');
            spanValid.style.color = '#fa3858';
            spanValid.innerText = message;
        } else if (type == 'success') {
            inputValid.classList.remove('input-invalid');
            inputValid.classList.add('input-valid');
            spanValid.style.color = '#28c76f';
            spanValid.innerText = message;
        } else {
            inputValid.classList.remove('input-invalid');
            inputValid.classList.remove('input-valid');
            spanValid.innerText = '';
        }
    }

}

export { addEventRegisterUser }