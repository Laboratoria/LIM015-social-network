// importamos la funcion que vamos a testear
import { COMPONENTS } from '../src/lib/dictionary.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof COMPONENTS).toBe('function');
  });
});
