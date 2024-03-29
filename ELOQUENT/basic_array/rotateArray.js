const reverse = function (nums, start, end) {
  while (start < end) {
    console.log('[nums[end], nums[start]]', [nums[end], nums[start]]);
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
    console.log('nums', nums);
  }
}

const rotate = function (nums, k) {
  k = k % nums.length; // k=102, length=5, 2 rotations
  reverse(nums, 0, nums.length - 1)

  // start = 0, end = k - 1
  // reverse(nums, 0, k - 1)

  // start = k, end = length - 1
  // reverse(nums, k, nums.length - 1)

  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6], 3))
// console.log(rotate([1, 2, 3, 4, 5, 6]))
// console.log(rotate([6, 5, 4, 3, 2, 1]))
// console.log(rotate([], 3))


