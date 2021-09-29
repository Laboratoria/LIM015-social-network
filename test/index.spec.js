import { registerWithEmail } from '../src/security/security.function.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);

// /* const firebasemock = require('firebase-mock'); */
// //const mockauth = new firebasemock.MockAuthentication();

// /* const mockauth = new firebasemock.MockFirebase(); */
// //mockauth.autoFlush();

// global.firebase = new firebasemock.MockFirebaseSdk(
//   // use null if your code does not use RTDB
//   () => null,
//   () => mockauth,
// );
// importamos la funcion que vamos a testear
/* import { initLogin } from '../src/view/login.view.js';
describe('initLogin', () => {
  it('debería ser una función', () => {
    expect(typeof initLogin).toBe('"#/home"');
  });
});
 */
describe('registerWithEmail', () => {
  it('Se registre con correo y contraseña', () => {
    expect(typeof registerWithEmail).toBe('function');
  });
});
