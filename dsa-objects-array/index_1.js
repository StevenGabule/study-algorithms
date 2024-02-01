// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".

function repeatStringNumTimes(str, times) {
  let characters = '';
  for (let i = 0; i < times; i++) {
    characters += `${str}`;
  }
  return characters;
}

// console.log(repeatStringNumTimes('*', 3));
// console.log(repeatStringNumTimes("abc", 3))
// console.log(repeatStringNumTimes("abc", 4)) // should return "abcabcabcabc".
// console.log(repeatStringNumTimes("abc", 1)) // should return "abc".
// console.log(repeatStringNumTimes("*", 8) ) //should return "********".
// console.log(repeatStringNumTimes("abc", -2)) // should return "".

// using recursion
function two(string, times) {
  if (times < 0) return '';
  if (times === 1) return string;
  else {
    return string + two(string, times - 1);
  }
}
// console.log(two('*', 3));
// console.log(two("abc", 3))
// console.log(two("abc", 4)) // should return "abcabcabcabc".
// console.log(two("abc", 1)) // should return "abc".
// console.log(two("*", 8) ) //should return "********".
// console.log(two("abc", -2)) // should return "".

// Approach #3: Repeat a String using ES6 repeat() method
function three(string, times) {
  return times > 0 ? string.repeat(times) : '';
}

console.log(three('*', 3));
console.log(three('abc', 3));
console.log(three('abc', 4)); // should return "abcabcabcabc".
console.log(three('abc', 1)); // should return "abc".
console.log(three('*', 8)); //should return "********".
console.log(three('abc', -2)); // should return "".
