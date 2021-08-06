import loginPage from '../pages/login.js';
import signUpPage from '../pages/signup.js';
import newsPage from '../pages/news.js';

export const pages = {
  login: loginPage,
  signup: signUpPage,
  news: newsPage,
};
// reemplaza el #
export const changeRoute = (hash) => {
  const route = hash.replace('#', '');
  window.history.replaceState({}, route, `/${route}`);
};
