// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
myFunction();

// Etiquetas globales traidas del body html
const headerTag = document.getElementById('header');
const contentPrincipal = document.getElementById('content');
const footerTag = document.getElementById('footer');



contentPrincipal.innerHTML = login();