// method 1: brute force
// function findNonRepeatingCharacter(str) {
// 	let repeat;
// 	for (let i = 0; i < str.length; i++) {
// 		repeat = false;
// 		for (let j = 0; j < str.length; j++) {
// 			if(str[i] === str[j] && i !== j) {
// 				repeat = true;
// 			}
// 		}
// 		if (repeat === false) {
// 			return i
// 		}
// 	}
// 	return null;
// }

// console.log(findNonRepeatingCharacter('aabbcc'));
// console.log(findNonRepeatingCharacter('aabbccd'));
// console.log(findNonRepeatingCharacter('aAbbDADcdD1a'));
// console.log(findNonRepeatingCharacter('11011'));

// ** method 2: using hash table
function findNonRepeatingCharacter(str) {
	const hashTable = {};
	for (let i = 0; i < str.length; i++) {
		if (str[i] in hashTable) {
			hashTable[str[i]]++;
		} else {
			hashTable[str[i]] = 1;
		}
	}
	for (let i = 0; i < str.length; i++) {
		if (hashTable[str[i]] === 1) {
			return i;
		}
	}
	return null;
}
console.log(findNonRepeatingCharacter('aabbcc'));
console.log(findNonRepeatingCharacter('aabbccd'));
console.log(findNonRepeatingCharacter('aAbbDADcdD1a'));
console.log(findNonRepeatingCharacter('11011'));
