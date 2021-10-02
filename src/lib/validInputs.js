const validInput = (idInput, message, type) => {
    const inputValid = document.querySelector('#' + idInput);
    /* console.log(inputValid) */
    const spanValid = document.querySelector('#msg-' + idInput);
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
    }
}

const limpiar = (arrayInputs) => {
    let inputValid;
    let spanValid;
    for (let key in arrayInputs) {
        inputValid = document.querySelector('#' + arrayInputs[key]);
        spanValid = document.querySelector('#msg-' + arrayInputs[key]);
        inputValid.classList.remove('input-invalid');
        inputValid.classList.remove('input-valid');
        spanValid.innerText = '';
    }
}

export { validInput, limpiar }