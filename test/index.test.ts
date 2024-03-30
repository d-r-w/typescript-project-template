import { getMessage } from 'src/index';

describe('getMessage()', () => {
  it('should return `Hello World!`', () => {
    expect(getMessage()).toBe('Hello World!');
  });
});