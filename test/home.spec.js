import { HOME } from '../src/views/home.js';

describe('HOME', () => {
  it('debería ser una función', () => {
    expect(typeof HOME).toBe('function');
  });
  it('...', () => {
    // const el = HOME();
    console.log(HOME);
    console.log(HOME());
  });
});
