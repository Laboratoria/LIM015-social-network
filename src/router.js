import { components } from '../views/components';

const changeView = (route) => {
  const container = document.querySelector('#container');
  window.location.hash = route;
  container.innerHTML = '';

  switch (route) {
    case '':
    case '#':
    case '#/': {
      container.appendChild(components.login());
      break;
    }
    case '#/register': {
      container.appendChild(components.register());
      break;
    }
    case '#/community': {
      container.appendChild(components.community());
      break;
    }
    case '#/profile': {
      container.appendChild(components.profile());
      break;
    }
    default:
      break;
  }
};

export { changeView };
