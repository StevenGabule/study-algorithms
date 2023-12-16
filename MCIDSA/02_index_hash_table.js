const findIndicesSumBF = (array, targetValue) => {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (targetValue === array[i] + array[j]) {
				return [i, j]
			}
		}
	}
	return []
}

// console.log(findIndicesSumBF([1,2,55,34,5,40], 39)); // [3, 4]

const findIndicesSum = (array, targetValue) => {
	const hashTable = {};
	let neededValue;
	for (let i = 0; i < array.length; i++) {
		neededValue = targetValue - array[i];
		if (neededValue in hashTable) return [hashTable[neededValue], i]
		else hashTable[array[i]] = i;
	}
	return [];
}


const findIndicesSumTesting = (array, targetValue) => {
	const hashTable = {};
	let neededValue;
	for (let i = 0; i < array.length; i++) {
		neededValue = targetValue - array[i];
		if (neededValue in hashTable) return [hashTable[neededValue], i]
		else hashTable[array[i]] = i;
	}
	return [];
}


console.log(findIndicesSum([1, 2, 55, 34, 5, 40], 39)); // [3, 4]