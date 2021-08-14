// importamos la funcion que vamos a testear
import {
  userSignUp,
  userSignIn,
  loginGoogle,
  loginFacebook,
  verifyEmail,
} from '../src/firebase/autenticacion.js';

// eslint-disable-next-line import/no-unresolved
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockstorage = new firebasemock.MockStorage();
const mockfirestore = new firebasemock.MockFirestore();
mockauth.autoFlush();
mockfirestore.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockstorage,
  () => mockfirestore,
);

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

describe('Registro de usuario', () => {
  it('Deberia poder registrarse', () => userSignUp('prueba@test.com', 'pruebatest')
    .then((user) => {
      expect(user.email).toBe('prueba@test.com');
      expect(user.password).toBe('pruebatest');
    }));
});

describe('Verficar cuenta email', () => {
  // it('Debería poder verificar el email', () => verifyEmail('gabhu@hotmail.es')
  it('Debería enviar un email de verificación', () => {
    const mockSendEmail = jest.fn();
    firebase.auth().currentUser.sendEmailVerification = mockSendEmail;
    verifyEmail();
    expect(mockSendEmail).toHaveBeenCalled();
    expect(mockSendEmail.mock.calls).toHaveLength(1);
  });
});

describe('Iniciar sesion con correo', () => {
  it('Deberia poder iniciar sesión', () => userSignIn('pamela.rupay31@rs.com', 'laboratoria')
    .then((user) => {
      expect(user.email).toBe('pamela.rupay31@rs.com');
    }));
});

describe('Logearse con google', () => {
  it('Debería poder logearse con una cuenta de google', () => loginGoogle()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
      expect(user.providerData[0].providerId).toBe('google.com');
    }));
});

describe('Logearse con facebook', () => {
  it('Debería poder loguearse con una cuenta de facebook', () => loginFacebook()
    .then((user) => {
      expect(user.providerData[0].providerId).toBe('facebook.com');
    }));
});
