// 1. Instalar 'npm install firebase-mock --save-dev'
// 2. Integrar segun el tutorial el require, el mockauth, el mocksdk y el flush()
// documentación: https://www.npmjs.com/package/firebase-mock
import {
  registerWithFirebase,
  login,
  loginWithFacebook,
  loginWithGoogle,
  logOutUser,
} from '../src/firebase/firebase-auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);

// AQUI COMIENZAN LAS PRUEBAS UNITARIAS
describe('registerWithFirebase', () => {
  it('Deberia ser una función', () => {
    expect(typeof registerWithFirebase).toBe('function');
  });
  it('Debería crearse un usuario', () => registerWithFirebase('ana@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('ana@gmail.com');
      expect(user.password).toBe('123456');
    }));
});

describe('login', () => {
  it('Deberia ser una función', () => {
    expect(typeof login).toBe('function');
  });
  it('Debería permitir loguearse', () => login('a15@gmail.com', '135792')
    .then((user) => {
      expect(user.email).toBe('a15@gmail.com');
    }));
  it('No debería aceptar un email que no esta registrado', () => login('a23@gmail.com', '135792')
    .catch((error) => {
      expect(error.code).toBe('auth/wrong-password');
    }));
});

describe('loginWithFacebook', () => {
  it('Debería ser una función', () => {
    expect(typeof loginWithFacebook).toBe('function');
  });
  it('Debería conectarse con su cuenta de fb', () => loginWithFacebook()
    .then((user) => {
      expect(user.providerData[0].providerId).toBe('facebook.com');
    }));
});

describe('loginWithGoogle', () => {
  it('Deberia ser una función', () => {
    expect(typeof loginWithGoogle).toBe('function');
  });
  it('Debería conectarse con su cuenta de google', () => loginWithGoogle()
    .then((user) => {
      expect(user.providerData[0].providerId).toBe('google.com');
    }));
});

describe('logOutUser', () => {
  it('deberia ser una función', () => {
    expect(typeof logOutUser).toBe('function');
  });
  it('deberia cerrar sesion', () => logOutUser()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});
