import { components } from "../view/index.js";
import { events } from "../firebase/function.js";
// import {components} from '../view/index.js';
const changeView = (route) => {
  // const sectionView= document.getElementById("container");
  // console.log(sectionView);
  const container = document.getElementById("container");
  container.innerHTML = " ";
  switch (route) {
    case "#/login": {
      container.appendChild(components.login());
      events();
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
