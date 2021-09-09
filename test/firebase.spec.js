// eslint-disable-next-line object-curly-newline
import { createUser, registerGoogle, emailVerification, signInUser } from '../src/firebase/firebase-functions.js';

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
});

describe('registerGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof registerGoogle).toBe('function');
  });
});

describe('emailVerification', () => {
  it('debería ser una función', () => {
    expect(typeof emailVerification).toBe('function');
  });
});

describe('signInUser', () => {
  it('debería ser una función', () => {
    expect(typeof signInUser).toBe('function');
  });
});
