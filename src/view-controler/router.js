
import { components } from '../View/indexView.js'


const changeView=(route) => {
    console.log(route);
    const container = document.getElementById("container");
    container.innerHTML='';
    switch (route){
      case '': 
      case '#':
      case '#/': {return container.appendChild(components.login())}
      case '#/register':{return container.appendChild(components.register())}
      case '#/home':{return container.appendChild(components.home()) }
      case '#/profile':{return container.appendChild(components.profile()) }
      default: 
      return container.appendChild(components.Err404())
  }
}

export  {changeView}