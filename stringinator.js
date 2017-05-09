const _ = require('./underbar');

const first = function(str, n = 1) {
  // Your code goes here
  return n === 1 ? str[0] : str.slice(0, n); 
};

const last = function(str, n = 1 ) {
  // Your code goes here
  return n === 1 ? str[str.length-1] : str.slice(Math.max(0, str.length-n)); 
};

const removeChar = function(str, target) {
  // hint: use _.reject
  // Your code goes here
  return _.reject(str, el => el === target).join("");  
};

const hasChar = function(str, target) {
  // hint: use _.some
  // Your code goes here
  return _.some(str, el=> el === target);
};


const isOnlyDigits = function(str) {
  // Your code goes here
  return _.every(str, el => "1234567890".indexOf(el) !== -1 ); 
};


const filterToOnlyDigits = function(str) {
  // Your code goes here
  return _.reject(str, el => "1234567890".indexOf(el) === -1).join(""); 
};


const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
  return _.uniq(obj).map( el => truncateString(el, maxLength));
};






const countChars = function(str) {
  return _.reduce(str, function (obj, char) { 
    if( obj[char] === undefined ) { 
      obj[char] =1; 
    } else {  
      obj[char] += 1;  
    }
    return obj; 
  }, {});
};


const dedup = function(str) {
  // Your code goes here
  return _.uniq(str).join("");
};



module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};