import { components } from '../views/index.js';
import { getPost } from '../firebase/data-base.js';

export const changeViews = (route) => {
  const container = document.getElementById('contenedorIndex');
  container.innerHTML = '';

  switch (route) {
    case '':
    case '#/':
      container.appendChild(components.signin());
      break;

    case '#/signup':
      container.appendChild(components.signup());
      break;

    case '#/home':
    {
      const loadPost = (data) => {
        container.innerHTML = '';
        container.appendChild(components.home(data));
      };
      getPost(loadPost);
      break;
    }
    case '#/profile':
      container.appendChild(components.profile());
      break;

    default:
      container.appendChild(components.error());
      break;
  }
};
