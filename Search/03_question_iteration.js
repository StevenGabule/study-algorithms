function searchForRangeIterative(array, target) {
	const leftExtreme = findLeftExtreme(array, target);
	const rightExtreme = findRightExtreme(array, target);
	return [leftExtreme, rightExtreme];
}

function findLeftExtreme(array, target) {
	let left = 0;
	let right = array.length - 1;
	let middle;
	while (left <= right) {
		middle = Math.floor((left + right) / 2);
		if (target === array[middle]) {
			// modification binary search
			if (middle === 0) return 0;
			if (array[middle - 1] === target) right = middle - 1;
			else return middle;
		} else if (target < array[middle]) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	return -1;
}

function findRightExtreme(array, target) {
	let left = 0;
	let right = array.length - 1;
	let middle;
	while (left <= right) {
		middle = Math.floor((left + right) / 2);
		if (target === array[middle]) {
			// modification binary search
			if (middle === array.length - 1) return middle;
			if (array[middle + 1] === target) left = middle + 1;
			else return middle;
		} else if (target < array[middle]) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	return -1;
}

console.log(searchForRangeIterative([1, 11, 2, 2, 0, 2, 3, 4, 2], 1)); // [ -1, -1 ]
console.log(searchForRangeIterative([1, 1, 2, 2, 0, 2, 3, 4, 2], 2));  // [ 5, 5 ]
console.log(searchForRangeIterative([1, 1, 2, 2, 2, 3, 4, 4], 12));    //  [ -1, -1 ]
console.log(searchForRangeIterative([1, 2, 2, 4, 5, 6], 2));					 // [ 1, 2 ]
console.log(searchForRangeIterative([1, 2, 3, 3, 3, 3, 4, 5], 3)); 		 // [ 2, 5 ] 