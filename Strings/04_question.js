// Question 2:Group Anagrams - Given an array of strings consisting of lower case 
// English letters, group the anagrams together. 
// You can return the answer in any order. An Anagram is a word or 
// phrase formed by rearranging the letters of a different word or 
// phrase, using all the original letters exactly once.
function groupAnagrams(strs) {
	const sorted = strs.map(x => x.split('').sort().join('')); // key
	const ht = {}
	// hash table - key sorted array and values - strings array
	for (let i = 0; i < strs.length; i++) {
		if (!ht[sorted[i]]) ht[sorted[i]] = [strs[i]];
		else ht[sorted[i]].push(strs[i])
	}
	return Object.values(ht);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat', 'tab']));
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'bar', 'nat', 'bat', 'tab', '22', 'rab']));