// Aqui se exporta las vistas de los otros JS, que estan en deafault
import Signin from './signin.js';
import Signup from './signup.js';
import Home from './home.js';
import Profile from './profile.js';
import Error from './error.js';

export const components = {
  signin: Signin,
  signup: Signup,
  home: Home,
  profile: Profile,
  error: Error,
};
