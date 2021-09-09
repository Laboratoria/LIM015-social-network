const validInput = (form, idInput, message, type) => {
    const inputValid = form.querySelector('#' + idInput);
    const spanValid = form.querySelector('#msg-' + idInput);
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

const limpiar = (form, arrayInputs) => {
    let inputValid;
    let spanValid;
    for (let key in arrayInputs) {
        inputValid = form.querySelector('#' + arrayInputs[key]);
        spanValid = form.querySelector('#msg-' + arrayInputs[key]);
        inputValid.classList.remove('input-invalid');
        inputValid.classList.remove('input-valid');
        spanValid.innerText = '';
    }
}

export { validInput, limpiar }