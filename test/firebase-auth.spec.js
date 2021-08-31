import {
  registerWithFirebase,
  login,
  loginWithGoogle,
  logOutUser,
} from '../src/firebase/firebase-auth.js';

const firebasemock = require('firebase-mock');

const mockAuth = new firebasemock.MockAuthentication();
mockAuth.autoFlush();

global.firebase = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockAuth,
);

// Test para registerWithFirebase

describe('registerWithFirebase', () => {
  it('deberia ser una función', () => {
    expect(typeof registerWithFirebase).toBe('function');
  });
});

describe('Creo una cuenta con correo y contraseña', () => {
  it('debería crearse un usuario', () => registerWithFirebase('ana@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('ana@gmail.com');
    }));
});

// Test para login

describe('login', () => {
  it('deberia ser una función', () => {
    expect(typeof login).toBe('function');
  });
});

describe('login con correo y contraseña', () => {
  it('debería iniciar sesión', () => login('ana@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('ana@gmail.com');
    }));
});

// Test para loginWithGoogle

describe('loginWithGoogle', () => {
  it('deberia ser una función', () => {
    expect(typeof login).toBe('function');
  });
});

describe('login con Google', () => {
  it('debería poder el usuaurio ingresar con su cuenta de google', () => loginWithGoogle()
    .then((user) => {
      expect(user.providerData[0].providerId).toBe('google.com');
    }));
});

// Test para logOutUser

describe('logOutUser', () => {
  it('deberia ser una función', () => {
    expect(typeof logOutUser).toBe('function');
  });
});

describe('logOutUser deberían permitir cerrar sesión', () => {
  it('deberia cerrar sesion', () => logOutUser()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});
