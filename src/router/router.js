/* eslint-disable no-undef */
import { components } from '../views/components.js';
import { addEventsLogin } from '../views/login/eventsLogin.js';
import { addEventResetPassword } from '../views/password/eventsResetPassword.js';
import { addEventsRegister } from '../views/register/eventsSignUp.js';
import { loadComponents, loadComponentsProfile } from '../views/timeline/loadComponents.js';
import { alerts } from '../lib/alerts.js';

const changeView = (route) => {
    const containerMain = document.querySelector('#container-main');
    containerMain.innerHTML = '';
    switch (route) {
        case '/':
        case '':
        case '#/login':
            {
                const viewLogin = containerMain.appendChild(components.login());
                window.localStorage.removeItem('iduser');
                addEventsLogin();
                return viewLogin;
            }
        case '#/signup':
            {
                const viewRegistro = containerMain.appendChild(components.signUp());
                addEventsRegister();
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
                const verificar = localStorage.getItem('iduser');
                if (verificar != null || verificar != undefined) {
                    const viewTimeLine = containerMain.appendChild(components.timeLine());
                    const firstChild = viewTimeLine.firstChild;
                    viewTimeLine.insertBefore(components.header(), firstChild);
                    loadComponents();
                    return viewTimeLine;
                } else {
                    window.location.hash = '#/login';
                    alerts('info', 'Por favor inicie sesion');
                }
                break;
            }
        case '#/profile':
            {
                const viewProfile = containerMain.appendChild(components.profile());
                const firstChild = viewProfile.firstChild;
                viewProfile.insertBefore(components.header(), firstChild);
                loadComponentsProfile();
                return viewProfile;
            }


        default:
            { return containerMain.appendChild(components.error()); }
    }
};

export { changeView };