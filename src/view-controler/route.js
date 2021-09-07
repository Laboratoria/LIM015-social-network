import {components} from '../views/components.js'
const changeView = (route) =>{
    const containerMain =  document.querySelector('#container-main');
    containerMain.innerHTML="";
    switch (route) {
        case "":
            {return containerMain.appendChild(components.login())}
            break;
        case "#/signup":
            {return containerMain.appendChild(components.signUp())}
            break;
        default:
            {return containerMain.appendChild(components.error())}
    }

} 
export {changeView};