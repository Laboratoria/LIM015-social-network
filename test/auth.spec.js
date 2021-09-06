import {
  signIn, signUp, loginGoogle, signOut,
} from '../src/scripts/auth.js';

const firebasemock = require('firebase-mock');
// https://github.com/dmurvihill/firebase-mock/blob/4a6a54d1651d51943aa82bc4d419114a6344e5a5/tutorials/integration/jest.md

const mockauth = new firebasemock.MockAuthentication();

mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);
// signIn email
describe('function signIn', () => {
  it('should be a function', () => {
    expect(typeof signIn).toBe('function');
  });
  it('should login users successfully', () => signIn('elmo666@gmail.com', 'elmo666')
    .then((user) => {
      expect(user.email).toBe('elmo666@gmail.com');
    }));
});

// signUp email
describe('function signUp', () => {
  it('should be a function', () => {
    expect(typeof signUp).toBe('function');
  });
  it('should register users succesfully', () => signUp('elmo666@gmail.com', 'elmo666')
    .then((user) => {
      expect(user.email).toBe('elmo666@gmail.com');
    }));
});

// Google login
describe('function loginGoogle', () => {
  it('should be a function', () => {
    expect(typeof loginGoogle).toBe('function');
  });
  it('should login users with the google option successfully', () => {
    loginGoogle('elmo666@gmail.com')
      .then((user) => {
        expect(user.email).toBe('elmo666@gmail.com');
      });
  });
});
// signOut
describe('function signOut', () => {
  it('should be a function', () => {
    expect(typeof signOut).toBe('function');
  });
  it('should logout', () => signOut()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});
