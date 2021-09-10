import {
  signIn, signUp, loginGoogle, signOut, emailVerification, currentUser,
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
  //  emailVerification
  describe('function emailVerification', () => {
    it('should be a function', () => {
      expect(typeof emailVerification).toBe('function');
    });
    it('should send an email verification to user inbox', () => {
      const verificationMock = jest.fn();
      firebase.auth().currentUser.sendEmailVerification = verificationMock;
      emailVerification();
      expect(verificationMock).toHaveBeenCalled();
      expect(verificationMock.mock.calls).toHaveLength(1);
    });
  });
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

// currentUser
describe('function for mananaging Users in Firebase', () => {
  it('should be a function', () => {
    expect(typeof currentUser).toBe('function');
  });
  it('should receive the logged user', () => {
    const userMock = {
      currentUser: { id: '6OMv8jR7lCh5YHYNjCgP2oF02wd2' },
    };
    firebase.auth().onAuthStateChanged().currentUser = userMock.currentUser;
    const isUser = (user) => {
      expect(user.id).toEqual('6OMv8jR7lCh5YHYNjCgP2oF02wd2');
    };
    currentUser(isUser);
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
