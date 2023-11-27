function selectionSort(nums) {
	for (let i = 0; i < nums.length; i++) {
		let smallest = i;
		for (let j = i+ 1; j < nums.length; j++) {
			if (nums[j] < nums[smallest]) smallest = j;
		}
		if (i !== smallest) {
			// swap i and smallest
			let temp = nums[i];
			nums[i] = nums[smallest];
			nums[smallest] = temp;
		}
	}
	return nums;
}

console.log(selectionSort([1, 2, 3, 5, 5, 5, 3, 4, 1, 0, -1, 30, 90, 66, 44, 66]));
// [
// 	-1, 0, 1, 1, 2, 3,
// 	3, 4, 5, 5, 5, 30,
// 	44, 66, 66, 90
// ]
