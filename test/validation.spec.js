import {
  validateEmail, validateUser, validateNewUser,
} from '../src/scripts/validation.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();

mockauth.autoFlush();
mockfirestore.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
// use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

// validateEmail
describe('validateEmail', () => {
  it('should validate email returning "true"', () => {
    expect(validateEmail('tyrone.backyardiganxD@gmail.com')).toBe(true);
  });
  it('should return "false" if email is invalid', () => {
    expect(validateEmail('tyrone.backyardiganxD')).toBe(false);
  });
});

// validateUser
describe('validateUser', () => {
  it('should return "true" if email is valid', () => {
    expect(validateUser('tyrone.backyardiganxD@gmail.com')).toBe(true);
  });
  it('should return "false" if email is invalid', () => {
    expect(validateUser('tyrone.backyardiganxD')).toBe(false);
  });
});
// validateNewUser
describe('validateNewUser', () => {
  it('should return "true" if email is valid', () => {
    expect(validateNewUser('tyrone.backyardiganxD@gmail.com')).toBe(true);
  });
  it('should return "false" if email is invalid', () => {
    expect(validateNewUser('tyrone.backyardiganxD')).toBe(false);
  });
});
