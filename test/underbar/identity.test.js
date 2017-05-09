const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    // Your code goes here
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    // Your code goes here
    expect(_.identity(3)).toBe(3);
  });

  it('returns the same array if given an array', () => {
    // Your code goes here
    expect(_.identity([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ]); 
  });

  it('returns the same object if given an object', () => {
    // Your code goes here
    const obj = {
      name : 'hi',
      number : 3 
    }
    expect(_.identity(obj)).toEqual({ name: 'hi', number :3}); 
  });
});