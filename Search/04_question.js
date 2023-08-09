function searchInMatrix(matrix, target) {
	const columns = matrix[0].length;
	const rows = matrix.length;

	// binary search to identify the row
	let top = 0, bottom = rows - 1, middle;
	while (top <= bottom) {
		middle = Math.floor((top + bottom) / 2);
		if (target < matrix[middle][0]) bottom = middle - 1;
		else if (target > matrix[middle][columns - 1]) top = middle + 1;
		else break;
	}

	if (top > bottom) return false;

	let left = 0, right = columns - 1, midValue;
	while (left <= right) {
		midValue = Math.floor((left + right) / 2);
		if (target === matrix[middle][midValue]) return true;
		else if (target < matrix[middle][midValue]) right = midValue - 1;
		else left = midValue + 1;
	}
	return false;
}

console.log(searchInMatrix([
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[20, 30, 40, 50]
], 40)); // true

console.log(searchInMatrix([
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[20, 30, 40, 50]
], 7)); // true

console.log(searchInMatrix([
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[20, 30, 40, 50]
], 16)); // false