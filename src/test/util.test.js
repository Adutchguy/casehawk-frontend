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

  // need to find a better way to test if the date is correct, but it always changes
  test('cookieTime should return a new Date()', () => {
    const result = util.cookieTime(2);
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });

  // test.only('cookieFetch should return a cookie', () => {
  //   const result = util.cookieFetch('YEA=SON');
  //   // expect(result).toBeDefined();
  //   // expect(result).toBeTruthy();
  //   console.log('document.cookie', document.cookie);
  //   expect(result).toEqual(document.cookie);
  // });

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
