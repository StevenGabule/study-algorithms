/**
 * Quick Sort Algorithm
 * First select an element which is to be called as pivot element.
 * Next, compare all array elements with the selected pivot element and arrange them in such a way that, 
 * elements less than the pivot element are to it’s left and greater than pivot is to it’s right.
 * Finally, perform the same operations on left and right side elements to the pivot element.

 * How does QuickSort Work
 * First find the “pivot” element in the array.
 * Start the left pointer at first element of the array.
 * Start the right pointer at last element of the array.
 * Compare the element pointing with left pointer and if it is less than the pivot element, 
 * then move the left pointer to the right (add 1 to the left index). Continue this until left 
 * side element is greater than or equal to the pivot element.
 * Compare the element pointing with right pointer and if it is greater than the pivot element, 
 * then move the right pointer to the left (subtract 1 to the right index). Continue this until 
 * right side element is less than or equal to the pivot element.
 * Check if left pointer is less than or equal to right pointer, then swap the elements in locations of these pointers.
 * Increment the left pointer and decrement the right pointer.
 * If index of left pointer is still less than the index of the right pointer, then repeat the process; 
 * else return the index of the left pointer.
 * 
 * 
 * STEP 1 - Select Pivot: | 5 | 3 | 7 | 6 | 2 | 9 |
 *                                      P 
 * STEP 2 - left and Right pointers: | 5 | 3 | 7 | 6 | 2 | 9 |
 *                                     L                   R
 * STEP 3 - since 5 < 6, shift left pointers: | 5 | 3 | 7 | 6 | 2 | 9 |
 *                                                  L               R
 * STEP 4 - since 3 < 6, shift left pointers and 7 > 6, so stop: | 5 | 3 | 7 | 6 | 2 | 9 |
 *                                                                         L           R
 * STEP 5 - since 9 > 6, shift right pointers: | 5 | 3 | 7 | 6 | 2 | 9 |
 *                                                       L       R        
 * STEP 6 - since 2 < 6, stop and swap them both 2 and 7: | 5 | 3 | 2 | 6 | 7 | 9 |
 *                                                                  L       R                                                                  
 * STEP 7 - move pointers further: | 5 | 3 | 2 | 6 | 7 | 9 |
 *                                             L   R
 * STEP 8 - Since 6=6 move pointers further and stop as left crosses right: | 5 | 3 | 2 | 6 | 7 | 9 |
 */
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

// const nums = [2, 6, 5, 3, 8, 7, 1, 0];
const nums = [5, 3, 7, 6, 2, 9];
var items = [5, 3, 7, 6, 2, 9];
// quickSort(nums, 3, 8)
quickSort(items, 0, items.length - 1)
console.log(items);

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

/* console.log(nums.join(', ')); */