// importamos la funcion que vamos a testear
import { registerWithFirebase } from '../src/firebase/firebase-auth.js';

describe('registerWithFirebase', () => {
  // beforeEach(() => {
  //   global.firebase = {
  //     auth: () => {},
  //   };
  it('Deberia ser una función', () => {
    expect(typeof registerWithFirebase).toBe('function');
  });
});
