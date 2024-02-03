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

// console.log(reverseAStringUsingRecursive('hello'));
// console.log(reverseAStringUsingRecursive('Howdy'));
// console.log(reverseAStringUsingRecursive('Greetings from Earth'));

// is palindrome
// Algorithm Challenge
// Return true if the given string is a palindrome. Otherwise, return false.

// Provided test cases
// ** palindrome(“race car”) should return true
// ** palindrome(“not a palindrome”) should return false
// ** palindrome(“A man, a plan, a canal. Panama”) should return true
// ** palindrome(“never odd or even”) should return true
// ** palindrome(“nope”) should return false
// ** palindrome(“almostomla”) should return false
// ** palindrome(“My age is 0, 0 si ega ym.”) should return true
// ** palindrome(“1 eye for of 1 eye.”) should return false
// ** palindrome(“0_0 (: /-\ :) 0–0”) should return true
function isPalindrome(param) {
	// const re = /[.,-_\s]/g;
	// \W removes all non-alphanumeric characters:
	// \W matches any non-word character
	// \W is equivalent to [^A-Za-z0–9_]
	// \W matches anything that is not enclosed in the brackets
	const re = /[\W_]/g;
	let reverseWords = '';
	for (let i = param.length-1; i > -1; i--) {
		reverseWords += param[i].toLowerCase();
	}
	param = param.split(re).map(p => p.toLowerCase()).join('')
	reverseWords = reverseWords.split(re).map(p => p.toLowerCase()).join('')
	return param == reverseWords;
}  



function palindrome(str) {
  // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
  var lowRegStr = str.toLowerCase().replace(re, '');
  // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() 
	// = "a man, a plan, a canal. panama"
  // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = 
	// "amanaplanacanalpanama"
  // var lowRegStr = "amanaplanacanalpanama";
     
  // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
  // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
  // And, var reverseStr = "amanaplanacanalpanama";
   
  // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}

function palindrome2(str) {
	var re = /[^A-Za-z0-9]/g;
	str = str.toLowerCase().replace(re, '');
	var len = str.length;
	for (var i = 0; i < len/2; i++) {
		if (str[i] !== str[len - 1 - i]) {
				return false;
		}
	}
	return true;
 }
 
palindrome("A man, a plan, a canal. Panama");

console.log("race car", isPalindrome("race car")); // t
console.log("not a palindrome", isPalindrome("not a palindrome")); // f
console.log("A man, a plan, a canal. Panama", isPalindrome("A man, a plan, a canal. Panama")); // should return true
console.log("1 eye for of 1 eye.", isPalindrome("1 eye for of 1 eye.")); // f
console.log("never odd or even", isPalindrome("never odd or even")); // t
console.log("nope", isPalindrome("nope")); // f
console.log("almostomla", isPalindrome("almostomla")); // f
console.log("My age is 0, 0 si ega ym.", isPalindrome("My age is 0, 0 si ega ym.")); // t
console.log(`0_0 (: /-\ :) 0–0`, isPalindrome(`0_0 (: /-\ :) 0–0`)); // t
// 