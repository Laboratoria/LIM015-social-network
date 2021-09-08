import { components } from '../views/components.js';

const changeView = (route) => {
    const containerMain = document.querySelector('#container-main');
    containerMain.innerHTML = '';
    switch (route) {
        case '':
            { return containerMain.appendChild(components.login()); }

        case '#/signup':
            { return containerMain.appendChild(components.signUp()); }

        default:
            { return containerMain.appendChild(components.error()); }
    }
};

export { changeView };
