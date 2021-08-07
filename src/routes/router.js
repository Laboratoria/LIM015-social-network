import components from '../lib/index.js';

export const changePages = (hash) => {
  // Etiquetas globales traidas del body html
  const contentPrincipal = document.getElementById('content');
  contentPrincipal.innerHTML = '';
  switch (hash) {
    case '#/':
    { return contentPrincipal.appendChild(components.Login()); }
    case '#/signIn':
    { return contentPrincipal.appendChild(components.SignIn()); }
    default:
      return contentPrincipal.appendChild(components.Error404());
  }
  console.log (hash);
};
