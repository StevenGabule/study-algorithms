function binarySearchIterative(nums, target) {
	let left = 0;
	let right = nums.length - 1;
	let middle;

	while (left <= right) {
		middle = Math.floor((left + right) / 2);
		if (target === nums[middle]) return middle;
		if (target < nums[middle]) right = middle - 1;
		else left = middle + 1;
	}
	return -1;
}

// console.log([1, 2, 3, 4].indexOf(1)); // 0
// console.log(binarySearchIterative([1, 2, 3, 4], 13)); // -1

function binarySearchRecursive(nums, target) {
	function helper(nums, target, left, right) {
		if (left > right) return -1;
		const middle = Math.floor((left + right) / 2);
		if (target === nums[middle]) return middle;
		else if (target < nums[middle]) return helper(nums, target, left, middle - 1);
		else return helper(nums, target, middle + 1, right);
	}
	return helper(nums, target, 0, nums.length - 1);
}
console.log(binarySearchRecursive([1, 2, 3, 4], 3));// 2
console.log(binarySearchRecursive([1, 2, 3, 4, 7, 13, 33, 32, 12, 55], 32)); // 7