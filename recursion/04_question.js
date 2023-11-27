// Question 4:
// Given an integer array of unique elements, return all possible subsets (the power set). The solution set must not contain
// duplicates subsets. Return the solution in any order.
// Example:
// [1, 7]     powerset = [ [], [1], [7], [1, 7] ]
// output possibility: [1, 7] or [7, 1]
// Test cases:
// [1,2,3] => [[], [1], [2], [3]] => [[1,2], [1,3], [2,3], [1,2,3]]
// [9] => [[], [9]]
// [] => [[]]

// METHODS - COMPLEXITY ANALYSIS -  RECURSIVE SOLUTION:
// ASSUMING: [1, 8, 7]
//																				 [ ]
//																			/		    \
//																		[]          [ 1 ]
//																	 /	\		    	/   \
//																 []		 [8]    [1]   [1,8]
//																/	 \	 / \			/\			/\
//															[]   [7][8][8,7][1][1,7][1,8][1,8,7]
//													results: [[], [7], [8], [8,7], [1], [1,7], [1,8], [1, 8, 7 ]]

// steps:
// if i = length, push to results
// helper(i + 1), nums, subset
// push to subset nums[i]
// helper(i+1), nums, subset
// pop from subset
// helper 0, nums, []

// conclusions:
// n -> elements
// 2n subsets
// 0 to n
// on average push to a subset n/2 times
// T = O(2n x n/2)
//   = O(2n x n)
// space = O(2n x n)

// code:
function powerset(nums) {
	const output = [];
	function helper(nums, i, subset) {
		if (i === nums.length) {
			output.push(subset.slice());
			return;
		}
		// don't add
		helper(nums, i + 1, subset);
		// add
		subset.push(nums[i]);
		helper(nums, i + 1, subset);
		subset.pop();
	}
	helper(nums, 0, []);
	return output;
}

console.log(powerset([1, 8, 7]));