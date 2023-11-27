function isPangram(words) {
	const ht = {}
	let pangram;
	const characters = words.toLowerCase().split('').filter((v) => v !== " " && v !== '.');
	const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

	for (let i = 0; i < characters.length; i++) {
		pangram = alpha.indexOf(characters[i]) !== -1;
		ht[characters[i]] = pangram;
	}

	for (let i = 0; i < alpha.length; i++) {
		if (ht[alpha[i]] === false || ht[alpha[i]] == undefined) {
			return false;
		}
	}
	return true;
}

console.log(isPangram("the quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("this is not a pangram.")); // false
