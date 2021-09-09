const alerts = (type, message) => {
    const containerAlert = document.querySelector('#container-alert');
    containerAlert.innerHTML = '';
    switch (type) {
        case 'error':
            {
                containerAlert.classList.add('error-msg');
                containerAlert.innerHTML = `<i class="fa fa-times-circle"></i> ${message}`;
                break;
            }
        case 'info':
            {
                containerAlert.classList.add('info-msg');
                containerAlert.innerHTML = `<i class="fa fa-info-circle"></i> ${message}`;
                break;
            }
        case 'success':
            {
                containerAlert.classList.add('success-msg');
                containerAlert.innerHTML = `<i class="fa fa-check"></i> ${message}`;
                break;
            }
        default:
            {
                alert('el type solo puede ser success, error, info')
            }
    }

    //desapárecera el mensaje dentro de 8 segundos
    containerAlert.style.display = "block";
    setTimeout(function() {
        containerAlert.style.display = "none";
        containerAlert.classList.remove(type + '-msg');
    }, 4000);

}

const alertProcess = (show) => {
    //show es un booleano en caso true muestra si es false se oculta el alerta
    const containerAlert = document.querySelector('#container-alert');
    if (show) {
        containerAlert.innerHTML = '';
        containerAlert.classList.add('process-msg');
        containerAlert.innerHTML = `<i class="fa fa-chevron-right"></i> Procesando <img src="../images/svg/load.gif" alt="load" width="25" height="25" >`;
        containerAlert.style.display = "block";
    } else {
        containerAlert.style.display = "none";
        containerAlert.classList.remove('process-msg');
    }

}

export { alerts, alertProcess }