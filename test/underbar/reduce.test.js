const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    // Your code goes here
    const arr = [ 1, 2, 3, 4 ]; 
    expect(_.reduce(arr, (accumulator, numbers) => accumulator + numbers)).toBe(10); 

  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    // Your code goes here
    const arr = [ 1, 2, 3, 4];
    expect(_.reduce(arr, (a,b) => a + b)).toBe(10); 
  });
});