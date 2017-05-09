const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    // Your code goes here
    expect(_.some( [ 1, 3, 4 ], el => el % 2 === 1)).toBe(true); 
  });

  it('returns false if no number is odd', () => {
    // Your code goes here
    expect(_.some( [ 2, 4, 6 ], el => el % 2 === 1)).toBe(false); 
  });
});