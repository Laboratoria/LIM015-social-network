// aqui exportaras las funciones que necesites
import login from '../pages/login.js';
import signIn from '../pages/signIn.js';
import error404 from '../pages/error404.js';

// window.history.pushState({data: 'Movimiento'}, 'Title', '/'); OJO
export const components = () => {
  Login: login,
  SignIn: signIn,
  Error404: error404,
};
