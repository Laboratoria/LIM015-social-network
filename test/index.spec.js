import { registerWithEmail } from '../src/security/security.function.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
// const mockdatabase = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);

describe('registerWithEmail', () => {
  it('Se registre con correo y contraseña', () => {
    expect(typeof registerWithEmail).toBe('function');
  });
});
