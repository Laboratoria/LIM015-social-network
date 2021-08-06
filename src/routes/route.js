import {login, signIn} from './login'
  
const routes = {
  login: {
    path: '/login',
    template: login(),
  }
  signIn: {
    path: '/signIn',
    template: signIn(),
  }
  Home: {
    
  }
};
