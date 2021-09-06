//import Home from './home.js';
import Login from './login.js'
import Register from './register.js';

const components={
    //home: Home,
    login: Login,
    register: Register
}
export {components}
/* 
import {components} from '../view-controller/index.js';
const changeView=(route)=>{
    // const sectionView= document.getElementById("container");
    // console.log(sectionView);
    switch(route){
        case'#/login': {return components.login()}
        ///sectionView.innerHTML= components.login();
        case'#/register': {return components.register()}
        case'#/home': {return components.home()}

        default: 
//        sectionView.innerHTML= components.login();
         break;
    }
    //console.log(route);
}
export {changeView} */