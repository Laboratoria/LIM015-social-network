// Aqui se exporta las vistas de los otros JS, que estan en deafault
import Signin from './signin.js';
import Signup from './signup.js';
import { homehome } from './home.js';
import Profile from './profile.js';
import Error from './error.js';

export const conponents = {
  signin: Signin,
  signup: Signup,
  home: homehome,
  profile: Profile,
  error: Error,
};
