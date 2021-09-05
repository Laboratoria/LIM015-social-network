import { components } from '../view/allTemplate.js';

export const changeView = (route) => {
  const viewRoot = document.querySelector('#root');
  viewRoot.innerHTML = '';
  switch (route) {
    case '':
    case '#/':
    case '#/LogIn': viewRoot.appendChild(components.LogIn());
      break;
    default: viewRoot.appendChild(components.Error404());
  }
  return viewRoot;
};
