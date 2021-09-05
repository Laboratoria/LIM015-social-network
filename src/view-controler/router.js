import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/': container.appendChild(components.Home());
      break;
    case '#/SignIn': container.appendChild(components.SignIn());
      break;
    case '#/SignUp': container.appendChild(components.SignUp());
      break;
    default: container.appendChild(components.Error());
  }
  return container;
};

export { changeView };
