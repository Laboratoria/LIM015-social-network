import {
  postCollection, getCollection, postUserCollection, getUserCollection, deletePost,
} from '../src/firebase/firebase-firestore.js';

const firebasemock = require('firebase-mock');

const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();

describe('postCollection', () => {
  it('debería ser una función', () => {
    expect(typeof postCollection).toBe('function');
  });
});

describe('getCollection', () => {
  it('debería ser una función', () => {
    expect(typeof getCollection).toBe('function');
  });
});

describe('postUserCollection', () => {
  it('debería ser una función', () => {
    expect(typeof postUserCollection).toBe('function');
  });
});

describe('getUserCollection', () => {
  it('debería ser una función', () => {
    expect(typeof getUserCollection).toBe('function');
  });
});

describe('deletePost', () => {
  it('debería ser una función', () => {
    expect(typeof deletePost).toBe('function');
  });
});
