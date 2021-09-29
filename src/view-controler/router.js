import { components } from '../view/indexView.js'


const changeView=(route) => {
  // firebase.auth().onAuthStateChanged((user) => {
    
    console.log(route);
    const container = document.getElementById("container");
    container.innerHTML='';
    switch (route){
      case '': 
      case '#':
      case '#/': { container.appendChild(components.login())}
      break;      
      case '#/register':{container.appendChild(components.register())}
      break;
      case '#/home':{ container.appendChild(components.header()); container.appendChild(components.home()); container.appendChild(components.footer())}
                  // else{window.location.replace('#')}
      break;
      case '#/profile':{ container.appendChild(components.header()); container.appendChild(components.profile()) }
      break;
      default: 
      container.appendChild(components.Err404())  
      }
    // })
}

export  {changeView}