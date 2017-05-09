const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    // Your code goes here
    const obj = {
      name : 'wendy',
      age : 22, 
      gender : 'female',
      country : 'Canada'
    }
    expect(_.uniq(obj)).toEqual(['wendy', 22, 'female', 'Canada']); 
  });
});