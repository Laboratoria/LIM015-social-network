import {
  signUp, // signIn, googleLogin, logout,
} from '../src/scripts/fs-login.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();

mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);

describe('signUp', () => {
  it('`signUp` ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
  it('se creó un usuario', () => signUp('hola@gmail.com', '123456').then((userCredential) => {
    expect(userCredential.user.email).toBe('hola@gmail.com');
  }));
});
