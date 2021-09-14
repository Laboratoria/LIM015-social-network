import { components } from "../view/index.js";
import { eventsRegister, showLogin } from "../firebase/function.js";
//import { auth } from "../firebase/firebase.js";

const changeView = (route) => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  switch (route) {
    case "#/login": {
      container.appendChild(components.login());
      //events();
      showLogin();
      break;
    }
    ///sectionView.innerHTML= components.login();
    case "#/register": {
      container.appendChild(components.register());
      eventsRegister();
      break;
    }
    case "#/home": {
     container.appendChild(components.home());
      break;
    }

    default:
      return components.login();
      //        sectionView.innerHTML= components.login();
     
  }
  //console.log(route);
};


export { changeView };
