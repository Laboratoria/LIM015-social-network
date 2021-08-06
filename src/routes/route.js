import {login, signIn} from './login'
  
const routes = {
  login: {
    path: '/',
    template: login(),
  }
  signIn: {
    path: '/signIn',
    template: signIn(),
};
