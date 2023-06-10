// @ts-check

function twoSum(inputs, tv) {
	const hashed = {};
	let result;
	for (let i = 0; i < inputs.length; i++) {
		result = tv - inputs[i];
		if (result in hashed) {
			return [result, inputs[i]]
		} else {
			hashed[inputs[i]] = true
		}
	}
	return [];
}

// // target value 9
// const inputs = [1, 4, 3, 7, 5]
// const targetValue = 9;

// console.log(twoSum(inputs, targetValue));

function twoSumIndices(inputs, tv) {
	const ht = {}
	for (let i = 0; i < inputs.length; i++) {
		const potentialMatch = tv - inputs[i];
		if (potentialMatch in ht) {
			return [ht[potentialMatch], i]
		} else {
			ht[inputs[i]] = i;
		}
	}
	return []
}

const inputs = [1, 4, 3, 7, 5]
const targetValue = 9;
console.log(twoSumIndices(inputs, targetValue));
console.log(twoSumIndices([], targetValue));
console.log(twoSumIndices([13], targetValue));

