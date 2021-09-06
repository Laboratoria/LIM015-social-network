import {components} from '../view/index.js';
// import {components} from '../view/index.js';
const changeView=(route)=>{
    // const sectionView= document.getElementById("container");
    // console.log(sectionView);
    const container= document.getElementById("container");
    switch(route){
        
        case'#/login': {return  container.appendChild((components.login())) }
        ///sectionView.innerHTML= components.login();
       //case'#/register': {return components.register()}
        //case'#/home': {return components.home()}

        default:  return components.login()
//        sectionView.innerHTML= components.login();
         break;
    }
    //console.log(route);
}
export {changeView}

/* import Home from './home.js';
import Login from './login.js';
import Register from './register.js';

const components={
    home: Home,
    login: Login,
    register: Register
}
export {components} */