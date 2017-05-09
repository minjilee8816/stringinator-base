const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    // Your code goes here
    const arr =[ 1, 2, 3, 4, 5];
    expect(_.contains(arr, 3)).toBe(true); 
  });

  it('returns false if an array does not contain the target', () => {
    // Your code goes here
    const arr = [ 1, 2, 3, 4, 5]; 
    expect(_.contains(arr, 9)).toBe(false); 
  });

  it('returns true if the target value is among the values of an object', () => {
    // Your code goes here
    const obj = {
      number : 3,
      name : 'hi',
      age : 22
    }
    expect(_.contains(obj, 3)).toBe(true); 

  });

  it('returns false if the target value is not among the values of an object', () => {
    // Your code goes here
    const obj = {
      number : 3,
      name : 'hi',
      age : 22
    }
    expect(_.contains(obj, 'hello')).toBe(false); 
  });
});