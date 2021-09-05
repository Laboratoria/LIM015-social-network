import { components } from '../view/index.js';

// eslint-disable-next-line consistent-return
const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/': { return container.appendChild(components.Home()); }
    case '#/registrate':
    { return container.appendChild(components.Sign()); }
    default:
      break;
  }
  console.log(route);
};

export { changeView };
