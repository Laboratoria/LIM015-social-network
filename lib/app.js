// Este es el punto de entrada de tu aplicacion
import { changeViews } from './router/router.js';
// import { formValidation } from './components/validation.js';

/* document.addEventListener('DOMContentLoaded', () => {
  changeViews();
  formValidation();
}); */

window.addEventListener('load', () => {
  changeViews();
  // formValidation();
});

window.addEventListener('hashchange', changeViews);
