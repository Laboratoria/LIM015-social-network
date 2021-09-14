import { components } from "../view/index.js";
import { events, showLogin } from "../firebase/function.js";
import { auth } from "../firebase/firebase.js";

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
      events();
      break;
    }
    case "#/home": {
      return container.appendChild(components.home());
    }

    default:
      return components.login();
      //        sectionView.innerHTML= components.login();
      break;
  }
  //console.log(route);
};


export { changeView };
