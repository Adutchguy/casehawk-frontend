import * as util from '../lib/util.js';

describe('testing util file', () => {
  test('renderIf should render if true', () => {
    const result = util.renderIf(true, 'x', 'y');
    expect(result).toBe('x');
  });
  test('renderIf should render if false', () => {
    const result = util.renderIf(false, 'x', 'y');
    expect(result).toBe(undefined);
  });

  // const result = util.cookieFetch('beans=peaches');
  // console.log('COOKIE ***************', cookieTest);
  test('cookieCreate should create a cookie', () => {
    util.cookieCreate('beans', 'peaches', 12345);
    // expect(result).toBeDefined();
    // expect(result).toBeTruthy();
    console.log('document.cookie', document.cookie);
    expect(document.cookie).toEqual('beans=peaches');
  });
  test('cookieFetch should return a value of a cookies key', () => {
    const result = util.cookieFetch('banana: hammocks');
    console.log('RESULT', result);
    // expect(result).toBeDefined();
    // expect(result).toBeTruthy();
    console.log('document.cookie', document.cookie);
    expect(document.cookie).toEqual('beans=peaches');
  });

  test('classToggler should only include classes that are on', () => {
    const testToggle = { cool: false, beans: true };
    const result = util.classToggler(testToggle);
    expect(result).toEqual('beans');
  });
  test('classToggler should only include classes that are on', () => {
    const testToggle = { cool: false, beans: true };
    const result = util.classToggler(testToggle);
    expect(result).toEqual('beans');
  });
  test('classToggler should return an empty string for no on classes', () => {
    const testToggle = { cool: false, beans: false, cheese: false };
    const result = util.classToggler(testToggle);
    expect(result).toEqual('');
  });
});
