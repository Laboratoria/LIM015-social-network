/**
 * @jest-environment jsdom
 */

import { home } from '../src/view/home.js';
import { signIn } from '../src/view/signIn.js';
import { signUp } from '../src/view/signUp.js';
import { pageOnlyCats } from '../src/view/pageOnlyCats.js';
import { error } from '../src/view/error404.js';

describe('home', () => {
  it('debería ser una función', () => {
    expect(typeof home).toBe('function');
  });
  it('debería retornar Html strings', () => {
    expect(home()).toEqual(expect.any(Object));
  });
});

describe('signIn', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
  it('debería retornar Html strings', () => {
    expect(signIn()).toEqual(expect.any(Object));
  });
});

describe('signUp', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
  it('debería retornar Html strings', () => {
    expect(signUp()).toEqual(expect.any(Object));
  });
});

describe('pageOnlyCats', () => {
  it('debería ser una función', () => {
    expect(typeof pageOnlyCats).toBe('function');
  });
  it('debería retornar Html strings', () => {
    expect(pageOnlyCats()).toEqual(expect.any(Object));
  });
});

describe('error', () => {
  it('debería ser una función', () => {
    expect(typeof error).toBe('function');
  });
  it('debería retornar Html strings', () => {
    expect(error()).toEqual(expect.any(Object));
  });
});
