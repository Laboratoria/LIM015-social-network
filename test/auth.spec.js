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
describe('signUp', () => {
  it('`signUp` ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
  it('se creó un usuario', () => signUp('hola@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('hola@gmail.com');
    }));
});
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
