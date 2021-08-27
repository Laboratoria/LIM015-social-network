// Este es el punto de entrada de tu aplicacion
import { changeViews } from './router/router.js';

window.addEventListener('load', changeViews);

window.addEventListener('hashchange', changeViews);
