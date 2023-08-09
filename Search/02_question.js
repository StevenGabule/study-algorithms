// PSEUDOCODE
// STEPS:
// if val(m) = target?
// if val(L) < val(m)
// if val(L) <= target < val(M) 
//  then explore LP 
// 	else explore RP
// else
// 	if val(M) < target <= val(R)
//    explore RP
//  else explore LP

function searchRotatedSortedArray(nums, target) {
	let left = 0;
	let right = nums.length - 1;
	let middle;
	while (left <= right) {
		middle = Math.floor((left + right) / 2);
		if(target === nums[middle]) return middle;
		if(nums[left] <= nums[middle]) {
			// left part is sorted
			if(target >= nums[left] && target < nums[middle]) {
				// explore left part
				right = middle - 1;
			} else {
				// explore right part
				left = middle + 1;
			}
		} else {
			// right sorted
			if(target <= nums[right] && target < nums[middle]) {
				// explore right part
				left = middle + 1;
			} else {
				// explore left part
				right = middle - 1;
			}
		}
	}
	return -1;
}

console.log(searchRotatedSortedArray([1, 2, 3, 4, 5], 1));
console.log(searchRotatedSortedArray([1, 2, 4, 3, 4, 5], 4));