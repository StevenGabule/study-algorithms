function checkMonotonic(arr) {
	const items = arr.length - 1;
	const firstNum = arr[0];
	const lastNum = arr[items];

	if (firstNum === lastNum) { // check if the array elements is the same
		for (let i = 0; i < items; i++) {
			if (arr[i + 1] !== arr[i]) return false;
		}
	} else if (firstNum < lastNum) { // check if the array element is incremental
		for (let i = 0; i < items; i++) {
			if (arr[i + 1] < arr[i]) return false;
		}
	} else {
		// check if the array element is decremental
		for (let i = 0; i < items; i++) {
			if (arr[i + 1] > arr[i]) return false;
		}
	}

	// otherwise return true if array elements either the same, incremental or decremental
	return true;
}

console.log(checkMonotonic([1, 2, 3])); // true
console.log(checkMonotonic([3, 2, 1])); // true
console.log(checkMonotonic([3, 3, 3])); // true
console.log(checkMonotonic([3, 3, 1])); // true
console.log(checkMonotonic([3, 2, 1, 2, 3])); // false