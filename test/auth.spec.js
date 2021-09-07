import {
  signUp, signIn, googleLogin, logout,
} from '../src/scripts/fs-login.js';

/*
jest.mock('../src/scripts/fs-config.js', () => {
  // eslint-disable-next-line global-require
  const fbmock = require('firebase-mock');
  const auth = new fbmock.MockAuthentication();
  console.log(auth);
  auth.createUserWithEmailAndPassword = () => Promise.resolve('hola@gmail.com');
  const google = auth.GoogleAuthProvider();
  auth.signInWithPopup(google);
  return { auth };
});
global.firebase = { auth: { GoogleAuthProvider: jest.fn(() => {}) } };
*/

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
//  () => mockfirestore,
);

describe('signUp', () => {
  it('`signUp` ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
  it('se creó un usuario con email y contraseña', () => signUp('hola@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('hola@gmail.com');
    }));
});

describe('signIn', () => {
  it('`signIn` es una función', () => {
    expect(typeof signIn).toBe('function');
  });
  it('se inició sesión con email y contraseña', () => signIn('hola@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('hola@gmail.com');
    }));
});

describe('googleLogin', () => {
  it('se inició sesión con google', () => googleLogin()
    .then((result) => {
      expect(result.providerData[0].providerId).toBe('google.com');
    }));
});

describe('logout', () => {
  it('se cierra sesión', () => logout()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});

/*
import {
  signUp, // signIn, googleLogin, logout,
} from '../src/scripts/fs-login.js';
// import { firebaseConfig } from '../src/scripts/fs-config.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
//  () => mockfirestore,
);
*/
/*
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockdatabase = new firebasemock.MockFirebase();
const firebase = require('firebase');
const ref = firebase.database().ref('myRefUrl');
ref.on('value', function (snapshot) {
  console.log(snapshot.val());
});
*/

/*
test('se creó un usuario', () => signUp('hola@gmail.com', '123456').then((user) => {
  expect(user.email).toBe('hola@gmail.com');
}));
describe('lista de notas', () => {
  it('Debería poder iniciar sesion', () => signUp('front@end.la', '123456')
    .then((user) => {
      expect(user.email).toBe('front@end.la');
    }));
});
*/
