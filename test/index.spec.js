import {
  registerWithEmail, logInWithEmail, logInWithGoogle,
} from '../src/security/security.function.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
// const mockdatabase = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);
// ----------------------- register -----------------------//
describe('registerWithEmail', () => {
  it('deberia ser una funcion', () => { expect(typeof registerWithEmail).toBe('function'); });
  it('Debería poder registrarse con correo y contraseña', () => registerWithEmail('net@gmail.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('net@gmail.com');
    }));
});
// ----------------------- inicion de sesion -----------------------//
describe('iniciar sesion correo, contraseña', () => {
  it('deberia iniciar sesion', () => logInWithEmail('pepito@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('pepito@gmail.com');
    }));
});

describe('logInWithGoogle', () => {
  it('deberia ser una funcion', () => { expect(typeof logInWithGoogle).toBe('function'); });
});
it('debería iniciar sesión con Google', () => {
  logInWithGoogle().then((google) => {
    expect(google.providerData[0].providerId).toBe('google.com');
  });
});
