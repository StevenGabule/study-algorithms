// Question 1:Longest Unique char Substring - Given a string s, 
// find the length of the longest substring without repeating characters.
function maxLength(str) {
	let max = 0;
	let start = 0;
	const seen = {};

	for(let i = 0; i < str.length;i++) {
		const char = str[i];
		// abcdef
		// 1 3
		if(char in seen) {
			start = Math.max(start, seen[char] + 1);
		}
		max = Math.max(max, i - start + 1);
		// make an entry into hash table if it's not there
		seen[char] = i;
	}
	return max;
}

console.log(maxLength('abcdb')); // 4
console.log(maxLength('abcdberthjfgd')); // 10
console.log(maxLength('pqbrstbuvwvxy')); // 7