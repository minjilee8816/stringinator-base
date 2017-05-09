const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    // Your code goes here
    const people = [
      { name : 'minji', age : 22 },
      { name : 'wendy', age : 1 },
      { name : 'june', age : 3 },
      { name : 'may', age : 5 },
    ];
    expect(_.pluck(people, 'age')).toEqual([22, 1, 3, 5]);
  });
});