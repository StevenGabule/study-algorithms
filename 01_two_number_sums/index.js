/*
  Problem name: TWO NUMBER SUM
  [ 3, 5, -4, 8, 11, 1, -1, 6]
*/
// find the pair number that sum the target number: 10
/* Solve By Hash Table:
  { 
    3: true, 5: t, -4: t, 8: t, (11): t, 1: true
  }
  current num:x
  x + y = 10;
  10 - (-1) = 11
  11 + (-1) = 10

  another way;
  sort the value
  [-4,-1,1,3,5,6,8,11]
      L            R
  -4 + 11 = 7 == 10 ?
  -1 + 11 = 10 == 10 ?
*/

function twoNumberSumW1(arr, targetSum) {
  for (var i = 0; i < arr.length - 1; i++) {
    firstNum = arr[i];
    for (var j = 0; j < i + 1 + arr.length; j++) {
      secondNum = arr[j];
      if (firstNum + secondNum == targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

function twoNumberSumW2(arr, targetSum) {
  var nums = {};
  for (var num in arr) {
    potentialMatch = targetSum - arr[num];
    if (potentialMatch in nums) {
      return [potentialMatch, arr[num]];
    } else {
      nums[arr[num]] = true;
    }
  }
  return [];
}

// const start = Date.now();
// console.log("starting timer...");
const arr = [3, 6, -4, 8, 11, 1, -1, 6];
// twoNumberSumW1(arr, 12);
// console.log(twoNumberSumW1(arr, 19));
console.log(twoNumberSumW2(arr, 19));
// setTimeout(() => {
//   const millis = Date.now() - start;
//   console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
//   // expected output: seconds elapsed = 2
// }, 2000);
