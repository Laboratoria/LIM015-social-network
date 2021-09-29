import { components } from '../view/indexView.js'


const changeView=(route) => {
    const container = document.getElementById("container");
    container.innerHTML='';
    switch (route){
      case '': 
      case '#':
      case '#/':
      firebase.auth().onAuthStateChanged((user) => {
          if(user){
            if(user.emailVerified){window.location.replace('#/home')}
            else{container.appendChild(components.login())}
          }
        else{container.appendChild(components.login())}
        })
      break;      
      case '#/register': 
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
            if(user.emailVerified){window.location.replace('#/home')}
            else{container.appendChild(components.register())}
          }
        else{container.appendChild(components.register())}
        })
      break;
      case '#/home':firebase.auth().onAuthStateChanged((user) => {
        if(user){
          if(user.emailVerified){container.appendChild(components.header()); container.appendChild(components.home()); container.appendChild(components.footer())}
          else{window.location.replace('#')}
        }
        else{window.location.replace('#')}
      })    
      break;
      case '#/profile':firebase.auth().onAuthStateChanged((user) => {
        if(user){
          if(user.emailVerified){container.appendChild(components.header()); container.appendChild(components.profile())}
          else{window.location.replace('#')}
        }
        else{window.location.replace('#')}
      })
      break; 
      default: 
      container.appendChild(components.Err404())  
      }
  
}

export  {changeView}