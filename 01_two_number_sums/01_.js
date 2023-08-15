function twoSum(arr, target) {
	const ht = {};
	let potentialMatch;
	for (const el of arr) {
		potentialMatch = target - el;
		if (potentialMatch in ht) {
			return [potentialMatch, el];
		} else {
			ht[el] = true;
		}
	}
	return []
}

console.log(twoSum([6, 2, 4, 5, 10, 1], 15));