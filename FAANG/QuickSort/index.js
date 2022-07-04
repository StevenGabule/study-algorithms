
/** 
 * @param {number[]} arr
 * @param {number} begin
 * @param {number} end
 */ 
function quickSort(arr, begin, end) {
  if (begin < end) {
    var partitionIndex = partition(arr, begin, end);
    quickSort(arr, begin, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, end);
  }
}

/** 
 * @param {number[]} arr
 * @param {number} begin
 * @param {number} end
 */ 
function partition(arr, begin, end) {
  var pivot = arr[end];
  var i = (begin - 1);
  for (var j = begin; j < end; j++) {
    if (arr[j] <= pivot) {
      i++;
      var swapTemp1 = arr[i];
      arr[i] = arr[j];
      arr[j] = swapTemp1;
    }
  }
  var swapTemp2 = arr[i + 1];
  arr[i + 1] = arr[end]
  arr[end] = swapTemp2;
  return i + 1;
}
const nums = [2, 6, 5, 3, 8, 7, 1, 0];
quickSort(nums, 3, 8)
console.log(nums);

/**
 * Worst O(n2)
 * Average nLog(n)
 * / 

// my quicksort
// for (let idx = 0; idx < nums.length; idx++) {
//   for (let j = 0; j < nums.length; j++) {
//     if(nums[idx] >= nums[j]) {
//       var swapTemp = nums[idx];
//       nums[idx] = nums[j];
//       nums[j] = swapTemp
//     }
//   }
// }

// console.log(nums.join(', '));





