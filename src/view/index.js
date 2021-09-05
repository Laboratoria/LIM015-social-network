import { home } from './home.js';
import { signIn } from './signIn.js';
import { error } from './error404.js';
import { signUp } from './signUp.js';

const components = {
  Home: home,
  SignIn: signIn,
  SignUp: signUp,
  Error: error,
};

export { components };
