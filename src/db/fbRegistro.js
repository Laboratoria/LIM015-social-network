const addEventRegisterUser = (formRegistro) => {
    const inputEmail = formRegistro.querySelector('#email');
    const inputPassword = formRegistro.querySelector('#password');
    const inputConfirmPassword = formRegistro.querySelector('#confirm-password');
    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = inputEmail.value;
        const password = inputPassword.value;
        const confirmPassword = inputConfirmPassword.value;

        if (confirmPassword == password) {
            // eslint-disable-next-line no-undef
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    console.log(userCredential); //redirige a inicio
                }).catch((error) => {
                    console.log(error.code); //llamara otra funcion de afterregistro y no redirigir
                })

        } else {
            alert('Error: Las Contraseñas no son iguales');
        }

    });
}

export { addEventRegisterUser }