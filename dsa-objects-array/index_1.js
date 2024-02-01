// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".

function repeatStringNumTimes(str, times) {
	let characters = '';
	for(let i = 0; i < times; i++) {
		characters += `${str}`;
	}
	return characters;
}

console.log(repeatStringNumTimes('*', 3)); 
console.log(repeatStringNumTimes("abc", 3))
console.log(repeatStringNumTimes("abc", 4)) // should return "abcabcabcabc".
console.log(repeatStringNumTimes("abc", 1)) // should return "abc".
console.log(repeatStringNumTimes("*", 8) ) //should return "********".
console.log(repeatStringNumTimes("abc", -2)) // should return "".