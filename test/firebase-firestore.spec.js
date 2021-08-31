import MockFirebase from '../__mocks__/firebase-mock.js';
import { addPostCollection } from '../src/firebase/firebase-firestore.js';

global.firebase = MockFirebase();
// importamos la funcion que vamos a testear

describe('addPostCollection', () => {
  it('Debería ser una función', () => {
    expect(addPostCollection).toBe('function');
  });
});
