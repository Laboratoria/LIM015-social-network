/* eslint-disable import/no-unresolved */
import { logInTemplate } from './login.js';
import { error } from './error404.js';

const components = {
  LogIn: logInTemplate,
  Error404: error,
};

export { components };
