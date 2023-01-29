const twoNumberSum = (arr, targetSum) => {
  let nums = {}
  for (let i = 0; i < arr.length; i++) {
    let potential = targetSum - arr[i]
    if (potential in nums) {
      return [potential, arr[i]]
    }
    nums[arr[i]] = true;
  }
  return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 13));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], -1));
