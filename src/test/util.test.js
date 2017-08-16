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
  test.only('cookieTime should return a new Date()', () => {
    const result = util.cookieTime(2);
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });
});
