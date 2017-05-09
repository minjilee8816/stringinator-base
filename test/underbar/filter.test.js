const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    // Your code goes here
    expect(_.filter([1,2,3], el=> el % 2 === 1 )).toEqual([1,3]);
  });

  it('filters an object to only numeric values', () => {
    // Your code goes here
    expect(_.filter([1, 3, 'lemon', 'water', 'juice'], el => typeof el === 'number')).toEqual([1,3]);
  });
});