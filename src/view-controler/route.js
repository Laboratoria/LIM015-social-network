/* eslint-disable no-undef */
import { components } from '../views/components.js';
import { addEventRegisterUser } from '../db/fbRegistro.js'
const changeView = (route) => {
    const containerMain = document.querySelector('#container-main');
    containerMain.innerHTML = '';
    switch (route) {
        case '':
            {
                const viewLogin = containerMain.appendChild(components.login());
                return viewLogin;
            }

        case '#/signup':
            {
                const viewRegistro = containerMain.appendChild(components.signUp());
                const formRegistro = containerMain.querySelector('#form-registro');
                addEventRegisterUser(formRegistro);
                return viewRegistro;
            }

        default:
            { return containerMain.appendChild(components.error()); }
    }
};

export { changeView };
