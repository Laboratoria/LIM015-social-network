import {components} from '../view/index.js';
// import {components} from '../view/index.js';
const changeView=(route)=>{
    // const sectionView= document.getElementById("container");
    // console.log(sectionView);
    const container= document.getElementById("container");
    container.innerHTML=" ";
    switch(route){
        
        case'#/login': {return  container.appendChild((components.login())) }
        ///sectionView.innerHTML= components.login();
       case'#/register': {return container.appendChild((components.register()))}
       case'#/home': {return container.appendChild((components.home()))}

        default:  return components.login()
//        sectionView.innerHTML= components.login();
         break;
    }
    //console.log(route);
}
export {changeView}

