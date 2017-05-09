const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    // Your code goes here
    expect(_.map([1,2,3], ele => Math.pow(ele, 2)) ).toEqual([ 1, 4, 9 ]); 
  });
});
