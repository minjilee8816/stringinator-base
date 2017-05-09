const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    // Your code goes here
    expect(_.reject([1, 2, 3, 4, 5], el => el % 2 === 1 )).toEqual([2,4]); 

  });

  it('rejects null values from an object', () => {
    // Your code goes here
    expect(_.reject([null, null, 1, null, 2], el=> el === null )).toEqual([1,2]);
  });
});