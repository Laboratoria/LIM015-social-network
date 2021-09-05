
import { components } from '../View/indexView.js'


const changeView=(route) => {

    const container =document.getElementById("container");
    container.innerHTML='';
  switch (route){
      
      case '#/inicio':{return container.appendChild(components.inicio()) }
      case '#/perfil':{return container.appendChild(components.perfil())    }

      default:
          break;

  }
    console.log(route);

}



export  {changeView}