// 1. Instalar 'npm install firebase-mock --save-dev'
// 2. Integrar segun el tutorial el require, el mockauth, el mocksdk y el flush()
// documentación: https://www.npmjs.com/package/firebase-mock
import { registerWithFirebase } from '../src/firebase/firebase-auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);

// const users = {
//   email: 'juanitaLaHuerfanita@gmail.com',
//   password: 'hola123',
// };

describe('registerWithFirebase', () => {
  it('deberia ser una función', () => {
    expect(typeof registerWithFirebase).toBe('function');
  });
});
