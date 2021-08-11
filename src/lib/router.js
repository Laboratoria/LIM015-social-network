import loginPage from '../pages/login.js';
import signUpPage from '../pages/signup.js';
import newsPage from '../pages/news.js';

import { onLoadLogin, onLoadSignUp, onLoadNews } from '../functions/pages.js';

const root = document.querySelector('#root');
// reemplaza el #
const changeRoute = (hash) => {
  const route = hash.replace('#', '');
  window.history.replaceState({ route }, route, `/${route}`);
};

export const routes = {
  login: () => {
    changeRoute('#login');
    root.innerHTML = loginPage;
    onLoadLogin();
  },
  signup: () => {
    changeRoute('#signup');
    root.innerHTML = signUpPage;
    onLoadSignUp();
  },
  news: () => {
    changeRoute('#news');
    root.innerHTML = newsPage;
    onLoadNews();
  },
};

window.addEventListener('popstate', () => {
  const pathName = window.location.pathname;//
  const pathNameNoSlash = pathName.replace('/', '');
  routes[pathNameNoSlash]();
});
