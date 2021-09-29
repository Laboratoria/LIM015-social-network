/* eslint-disable no-undef */
import { components } from '../views/components.js';
import { addEventsLogin } from '../views/login/eventsLogin.js';
import { addEventResetPassword } from '../views/password/eventsResetPassword.js';
import { addEventsRegister } from '../views/register/eventsSignUp.js';
import { loadComponents } from '../views/timeline/loadComponents.js'
import { loadViewHeaderUser } from '../views/timeline/viewHeaderUser.js';
import { loadTimelineUser, addEventsProfileUser } from '../views/profile/eventsProfile.js';

const changeView = (route) => {
    const containerMain = document.querySelector('#container-main');
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
                addEventsProfileUser();
                return viewTimeLine;
            }
        // case `#/profile${viewProfileOtherUser()}`:
        case '#/profile':
            {
                const viewProfile = containerMain.appendChild(components.profile());
                const firstChild = viewProfile.firstChild;
                viewProfile.insertBefore(components.header(), firstChild);
                loadViewHeaderUser();
                loadTimelineUser();
                addEventsProfileUser();
                return viewProfile;
            }
    

        default:
            { return containerMain.appendChild(components.error()); }
    }
};

export { changeView };
