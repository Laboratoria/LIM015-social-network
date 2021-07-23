import { conponents } from '../views/index.js';


export const changeViews = (route) => {
    const container = document.getElementById('contenedorView1');
    container.innerHTML = '';

    switch (route) {
        case '#/':
            container.appendChild(conponents.singin())
            break;

        case '#/singup':
            container.appendChild(conponents.singup())
            break;

        case '#/home':
            container.appendChild(conponents.home())
            break;

        case '#/profile':
            container.appendChild(conponents.profile())
            break;

        case '#/error':
            container.appendChild(conponents.error())
            break;

        default:
            break;
    }

};


