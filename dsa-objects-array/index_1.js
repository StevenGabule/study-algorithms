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

// console.log(three('*', 3));
// console.log(three('abc', 3));
// console.log(three('abc', 4)); // should return "abcabcabcabc".
// console.log(three('abc', 1)); // should return "abc".
// console.log(three('*', 8)); //should return "********".
// console.log(three('abc', -2)); // should return "".

// The Algorithm Challenge Description
// Check if a string (first argument, str) ends with the 
// given target string (second argument, target).
function confirmEnding(string, target) {

	if(target.length > 1) {
		const arrStr = string.split(' ');
		return arrStr[arrStr.length - 1].includes(target);
	}
	return string[string.length - 1] === target;
}

function confirmEndingSubstr(string, target) {
	return string.substr(-target.length) === target;
}

function largestOfFour(arrOfNumbers) {
	const largeNumbers = [];
	for (const arrNums of arrOfNumbers) {
		largeNumbers.push(Math.max(...arrNums));
	}
	return largeNumbers;
}

// console.log(confirmEnding("Bastian", "n")) //  should return true.
// console.log(confirmEnding("Connor", "n") ); // should return false.
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); //should return false.
// console.log(largestOfFour([
// 		[4, 9, 1, 3], 
// 		[13, 35, 18, 26], 
// 		[32, 35, 97, 39], 
// 		[1000000, 1001, 857, 1]
// 	]) //should return [9, 35, 97, 1000000].
// );
// console.log(confirmEnding("He has to give me a new name", "name")) // should return true.
// console.log(confirmEnding("Open sesame", "same")); // should return true.
// console.log(confirmEnding("Open sesame", "pen")); // should return false.
// console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); // should return false.
// // t t f f
// console.log('hello wor ld'.endsWith('ld'));
// console.log('--------------------------------');
// console.log(confirmEndingSubstr("Bastian", "n"));
// console.log(confirmEndingSubstr("Connor", "n") ); // should return false.
// console.log(confirmEndingSubstr("Walking on water and developing software from a specification are easy if both are frozen", "specification")); //should return false.
// console.log(confirmEnding("Open sesame", "same")); // should return true.


// ** Reverse a String in JavaScript
// Algorithm Challenge
// Reverse the provided string.
// You may need to turn the string into an array 
// before you can reverse it.
// Your result must be a string.
function reverseStr(param) {
	let revStr = [];
	for (const st of param) {
		revStr.unshift(st)
	}
	return revStr.join('');
}

function reverseAStringUsingRecursive(str) {
	if(str === "") return "";
	else return reverseAStringUsingRecursive(str.substr(1)) + str.charAt(0)
}

// console.log(reverseStr('hello'));
// console.log(reverseStr('Howdy'));
// console.log(reverseStr('Greetings from Earth'));

console.log(reverseAStringUsingRecursive('hello'));
console.log(reverseAStringUsingRecursive('Howdy'));
console.log(reverseAStringUsingRecursive('Greetings from Earth'));
