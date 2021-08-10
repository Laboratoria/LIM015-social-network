import { home } from './home.js';
import { profile } from './profile.js';
import { error } from './error404.js';
import { logInTemplate } from './login.js';
import { registerTemplate } from './register.js';

const components = {
  LogIn: logInTemplate,
  Register: registerTemplate,
  Home: home,
  Profile: profile,
  Error404: error,
};
export { components };
