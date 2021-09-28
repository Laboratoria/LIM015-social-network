import { logInWithEmail } from '../src/security/security.function.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
mockauth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);
// importamos la funcion que vamos a testear
/* import { initLogin } from '../src/view/login.view.js';
describe('initLogin', () => {
  it('debería ser una función', () => {
    expect(typeof initLogin).toBe('"#/home"');
  });
});
 */
describe('logInWithEmail', () => {
  it('Se inició sesión con correo y contraseña', () => logInWithEmail('hola@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('hola@gmail.com');
    }));
});
