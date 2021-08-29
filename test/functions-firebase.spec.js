import {
  addUser,
  loginUser,
  googleLogin,
  sendPasswordReset,
  sendEmail,
  onAuthStateChanged,
} from '../lib/firebase/functions.js';

const firebaseMock = require('firebase-mock');

// const mockfirebase = new firebaseMock.MockFirebase();
const mockauth = new firebaseMock.MockAuthentication();
mockauth.autoFlush();

global.firebase = new firebaseMock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);

describe('addUser', () => {
  it('debería ser una función', () => {
    expect(typeof addUser).toBe('function');
  });
  it('', () => {
    const users = {
      email: 'ben@example.com',
      password: 'examplePass',
    };
    addUser(users.email, users.password)
      .then((user) => {
        expect(user).toEqual(users);
      });
  });
});

describe('loginUser', () => {
  it('debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('', () => {
    const users = {
      email: 'ben@example.com',
      password: 'examplePass',
    };
    loginUser(users.email, users.password)
      .then((user) => {
        expect(user).toEqual(users);
      });
  });
});

describe('googleLogin', () => {
  it('debería ser una función', () => {
    expect(typeof googleLogin).toBe('function');
  });
  it('', () => {
    const users = {
      email: 'ben@example.com',
      password: 'examplePass',
    };
    googleLogin(users.email, users.password)
      .then((user) => {
        expect(user).toEqual(users);
      });
  });
});

describe('sendPasswordResetEmail', () => {
  it('debería ser una función', () => {
    expect(typeof sendPasswordReset).toBe('function');
  });
  it('', () => {
    const mocksendPasswordResetEmail = jest.fn();
    const users = {
      email: 'ben@example.com',
    };
    firebase.auth().sendPasswordResetEmail = mocksendPasswordResetEmail;
    sendPasswordReset(users.email);
    expect(mocksendPasswordResetEmail).toHaveBeenCalled();
    expect(mocksendPasswordResetEmail.mock.calls).toHaveLength(1);
    expect(mocksendPasswordResetEmail).toHaveBeenCalledWith(users.email);
  });
});

describe('sendEmail', () => {
  it('debería ser una función', () => {
    expect(typeof sendEmail).toBe('function');
  });
  it('', () => {
    const mocksendEmail = jest.fn();
    firebase.auth().currentUser.sendEmailVerification = mocksendEmail;
    sendEmail();
    expect(mocksendEmail).toHaveBeenCalled();
    expect(mocksendEmail.mock.calls).toHaveLength(1);
  });
});

describe('onAuthStateChanged', () => {
  it('debería ser una función', () => {
    expect(typeof onAuthStateChanged).toBe('function');
  });
  it('', () => {
    const callback = () => {};
    onAuthStateChanged(callback);
    expect(callback).toEqual(callback);
  });
});
