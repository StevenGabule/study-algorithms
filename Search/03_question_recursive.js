function searchForRangeRec(arr, target) {
	const range = [-1, -1];
	findLeftExtreme(arr, target, range);
	findRightExtreme(arr, target, range);
	return range;
}

function findLeftExtreme(array, target, range, left = 0, right = array.length - 1) {
	if (left > right) return;
	const middle = Math.floor((left + right) / 2);
	if (array[middle] === target) {
		if (middle === 0) range[0] = 0;
		else if (array[middle - 1] === target) {
			findLeftExtreme(array, target, range, left, middle - 1);
		} else range[0] = middle;
	} else if (target < array[middle]) {
		findLeftExtreme(array, target, range, left, middle - 1);
	} else findLeftExtreme(array, target, range, middle + 1, right);
}

function findRightExtreme(array, target, range, left = 0, right = array.length - 1) {
	// base case
	if (left > right) return;
	const middle = Math.floor((left + right) / 2);
	if (array[middle] === target) {
		if (middle === array.length - 1) range[1] = middle;
		else if (target === array[middle + 1]) {
			findRightExtreme(array, target, range, middle + 1, right);
		} else range[1] = middle;
	} else if (target < array[middle]) {
		findRightExtreme(array, target, range, left, middle - 1);
	} else {
		findRightExtreme(array, target, range, middle + 1, right);
	}
}

console.log(searchForRangeRec([1, 1, 2, 2, 2, 3, 4], 2));
console.log(searchForRangeRec([1, 1, 2, 2, 2, 3, 4, 4], 12));