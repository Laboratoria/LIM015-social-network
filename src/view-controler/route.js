/* eslint-disable no-undef */
import { components } from '../views/components.js';
import { addEventsLogin } from '../views/login/eventsLogin.js';
import { addEventResetPassword } from '../views/password/eventsResetPassword.js';
import { addEventsRegister } from '../views/register/eventsSignUp.js';
import { loadComponents } from '../views/timeline/loadComponents.js'
import { loadViewHeaderUser } from '../views/timeline/viewHeaderUser.js';
import { viewProfileOtherUser } from '../views/header/viewHeader.js';
console.log(viewProfileOtherUser())

const changeView = (route) => {
    const containerMain = document.querySelector('#container-main');
    const infouser = JSON.parse(window.localStorage.getItem('infouser')); //extraemos lo que almacenamos en local archivo viewHeaderUser line 29
    // const allUsers = JSON.parse(window.localStorage.getItem('allUsers')); //extraemos de local viewHeaderUser Linea 21
    containerMain.innerHTML = '';
    switch (route) {
        case '/':
        case '':
            {
                const viewLogin = containerMain.appendChild(components.login());
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
                const viewTimeLine = containerMain.appendChild(components.timeLine());
                const firstChild = viewTimeLine.firstChild;
                viewTimeLine.insertBefore(components.header(), firstChild);
                loadComponents();
                return viewTimeLine;
            }
        // case `#/profile${viewProfileOtherUser()}`:
        case `#/profile${infouser.nameUser.replace(/\s+/g, '')}`:
            {
                const viewProfile = containerMain.appendChild(components.profile());
                const firstChild = viewProfile.firstChild;
                viewProfile.insertBefore(components.header(), firstChild);
                loadViewHeaderUser();
                return viewProfile;
            }
    

        default:
            { return containerMain.appendChild(components.error()); }
    }
};

export { changeView };
