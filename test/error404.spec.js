import { NOTFOUND } from '../src/views/error404.js';

describe('NOTFOUND', () => {
  it('debería ser una función', () => {
    expect(typeof NOTFOUND).toBe('function');
  });
});
