/* eslint-disable no-undef */
import { components } from '../views/components.js';
import { addEventRegisterUser } from '../db/signup-email.js'
import { addEventRegisterUserGoogle } from '../db/signup-google.js';
import { addEventRegisterUserFacebook } from '../db/signup-facebook.js';
import { addEventResetPassword } from '../db/reset-password.js';
import { addEventsTimeLine } from '../db/muro.js';
import { addEventLogin } from '../db/login.js'
import { readInfoUser } from '../db/crud/readInfoUser.js'

const changeView = (route) => {
    const containerMain = document.querySelector('#container-main');
    containerMain.innerHTML = '';
    switch (route) {
        case '/':
        case '':
            {
                const viewLogin = containerMain.appendChild(components.login());
                addEventLogin();
                addEventRegisterUserGoogle();
                addEventRegisterUserFacebook();
                return viewLogin;
            }
        case '#/signup':
            {
                const viewRegistro = containerMain.appendChild(components.signUp());
                addEventRegisterUser();
                addEventRegisterUserGoogle();
                addEventRegisterUserFacebook();
                return viewRegistro;
            }

        case '#/forgetPassword':
            {
                const viewForgetPassword = containerMain.appendChild(components.forgetPassword());
                addEventResetPassword();
                return viewForgetPassword;
            }
        case '#/timeline':
            {
                firebase.auth().onAuthStateChanged((user) => { //funcion para verificar si esta logueado
                    if (user) {
                        const viewTimeLine = containerMain.appendChild(components.timeLine());
                        const firstChild = viewTimeLine.firstChild;
                        viewTimeLine.insertBefore(components.header(), firstChild);
                        readInfoUser();
                        addEventsTimeLine();
                        return viewTimeLine;
                    } else {
                        window.location.href = '/';
                    }
                });
            }
            break;
        default:
            { return containerMain.appendChild(components.error()); }
    }
};

export { changeView };