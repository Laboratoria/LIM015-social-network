import { auth } from './fs-config.js';

const init = () => {
  // window.addEventListener('hashchange', () => {
    console.log('hola');
  // });
};



auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("auth-signin");
    init();
  
  } else {
    console.log("auth-signout");
  
  }
  
  });