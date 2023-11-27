// *** Question 3
// ** Given an array of distinct integers, return all the possible permutations. You can
// ** return the answer in any order.

function permutations(nums) {
	const permutation = [];
	function helper(nums, i) {
		if (i === nums.length - 1) {
			permutation.push(nums.slice());
			return;
		}
		for (let j = i; j < nums.length; j++) {
			// swap i, j
			[nums[i], nums[j]] = [nums[j], nums[i]];
			// recursive
			helper(nums, i + 1);
			// swap i, j
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}
	}
	helper(nums, 0);
	return permutation;
}

console.log(permutations([1, 2, 3, 4]));

function permute(nums) {
	let result = [];

	function backtrack(start) {
		if(start === nums.length) {
			// A permutation is found, add it to the result
			result.push([...nums])
			return;
		}
		for (let i = start; i < nums.length; i++) {
			// Swap elements to generate permutations
			[nums[start], nums[i]] = [nums[i], nums[start]];

			 // Explore further with the updated array
			 backtrack(start + 1);

			 // Revert the swap to explore other possibilities
			 [nums[start], nums[i]] = [nums[i], nums[start]];
		}
	}
	backtrack(0)
	return result;
}

// const testNum = [1, 2, 3];
// console.log(permute(testNum));
