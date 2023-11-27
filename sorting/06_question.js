function radixSort(array) {
	if (array.length === 0) return 'array is empty';
	const greatestNumber = Math.max(...array);
	const numberOfDigits = Math.floor(Math.log10(greatestNumber)) + 1;
	// counting sort has to be done x number of times where x = numberOfDigits
	for (let i = 0; i < numberOfDigits; i++) {
		countingSort(array, i);
	}
	return array;
}

function countingSort(array, place) {
	const output = new Array(array.length).fill(0);
	const temp = new Array(10).fill(0);
	const digitPlace = Math.pow(10, place);

	for (const num of array) {
		let digit = Math.floor(num / digitPlace) % 10;
		temp[digit]++;
	}

	for (let i = 1; i < 10; i++) {
		temp[i] = temp[i] + temp[i - 1];
	}

	for (let j = array.length - 1; j >= 0; j--) {
		const currDigit = Math.floor(array[j] / digitPlace) % 10;
		temp[currDigit]--;
		const insertPosition = temp[currDigit];
		output[insertPosition] = array[j];
	}

	for (let i = 0; i < output.length; i++) {
		array[i] = output[i];
	}
}

console.log(radixSort([384, 73, 374, 183, 65, 247, 185]));
// [
// 	65, 73, 183,
// 	185, 247, 374,
// 	384
// ]