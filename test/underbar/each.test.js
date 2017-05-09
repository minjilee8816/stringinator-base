const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const arr = [ 1, 2, 4, 'hi', 'hello'];
    let count = 0; 
    _.each(arr, function (ele, i, arr) {
      expect(ele).toBe(arr[i]); 
      count++; 
    });
    expect(count).toBe(5); 
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const arrLikeObj = {
      length : 3,
      name : 'hi',
      age : 33
    }
    let count = 0; 
    _.each(arrLikeObj, function (ele, i, obj) {
      expect(ele).toBe(obj[i]); 
      count++; 
    }); 
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    // Your code goes here
    const obj = {
      name : 'minji',
      age : 33, 
      school : 'HR'
    }
    let count = 0; 
    _.each(obj, function (ele, key, obj) {
      expect(ele).toBe(obj[key]);
      count ++; 
    });
    expect(count).toBe(3); 
  });
});



