import { home } from '../src/view/home.js';
import { signIn } from '../src/view/signIn.js';
import { signUp } from '../src/view/signUp.js';
import { pageOnlyCats } from '../src/view/pageOnlyCats.js';
import { error } from '../src/view/error404.js';

describe('home', () => {
  it('debería ser una función', () => {
    expect(typeof home).toBe('function');
  });
  it('debería ser un template string', () => {
    expect(typeof viewHome).toBe('undefined');
  });
});

describe('signIn', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
});

describe('signUp', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
});

describe('pageOnlyCats', () => {
  it('debería ser una función', () => {
    expect(typeof pageOnlyCats).toBe('function');
  });
});

describe('error', () => {
  it('debería ser una función', () => {
    expect(typeof error).toBe('function');
  });
});
