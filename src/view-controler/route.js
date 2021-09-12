/* eslint-disable no-undef */
import { components } from '../views/components.js';
import { addEventRegisterUser } from '../db/signup-email.js'
import { addEventRegisterUserGoogle } from '../db/signup-google.js';
import { addEventRegisterUserFacebook } from '../db/signup-facebook.js';
import { addEventResetPassword } from '../db/reset-password.js';
import { addEventsTimeLine } from '../db/muro.js';
import { addEventLogin, addEventLoginWithGoogle } from '../db/login.js'

const changeView = (route) => {
    const containerMain = document.querySelector('#container-main');
    containerMain.innerHTML = '';
    switch (route) {
        case '':
            {
                const viewLogin = containerMain.appendChild(components.login());
                addEventLogin();
                addEventLoginWithGoogle();
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
            case '#/timeline': {
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        const viewTimeLine = containerMain.appendChild(components.timeLine());
                        const firstChild = viewTimeLine.firstChild;
                        viewTimeLine.insertBefore(components.header(), firstChild);
                        addEventsTimeLine();
                        return viewTimeLine;
                    } else {
                        window.location.href = "";
                    }
                });
            }
        break;
        default:
            { return containerMain.appendChild(components.error()); }
    }
};

export { changeView };