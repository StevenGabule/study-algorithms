// my method: brute force
// function palindrome(str) {
// 	const arrStr = str.split('').reverse().join('');
// 	return str === arrStr;
// }

// console.log(palindrome('abba'));
// console.log(palindrome('abasaba2'));

// method 1: brute force solution:
// function isPalindrome(str) {
// 	let joinArr = [];
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		joinArr += str[i]
// 	}
// 	return str === joinArr;
// }
// console.log(isPalindrome('abba'));
// console.log(isPalindrome('ababa'));
// console.log(isPalindrome('abasaba2'));
// console.log(isPalindrome('12321'));

// method 2:  
// function isPalindrome(str) {
// 	let newStringToCompare = [];
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		newStringToCompare.push(str[i]);
// 	}
// 	return str === newStringToCompare.join('')
// }
// console.log(isPalindrome('abba'));
// console.log(isPalindrome('ababa'));
// console.log(isPalindrome('abasaba2'));
// console.log(isPalindrome('12321'));

// method 3:
// Steps:
// 1. Create a new string starting from end & compare  -> O(n2)T, O(n)S
// 2. Create an array -> string, compare -> O(n)TS
// 3. 2 pointes -> beg, end -> check
//								 ++   --
// 							-> O(n)T, O(i)S

console.log(isPalindromeCheck('abba'));
console.log(isPalindromeCheck('ababa'));
console.log(isPalindromeCheck('abasaba2'));
console.log(isPalindromeCheck('12321'));
