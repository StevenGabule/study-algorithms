/*
Problem name: TWO NUMBER SUM
[ 3, 5, -4, 8, 11, 1, -1, 6]
find the pair number that sum the target number: 10
Solve By Hash Table: [recommended]
  { 
    3: t,
    5: t, 
    -4: t, 
    8: t, 
    11: t,
    1: t
  }
  current num : x
  x + y = 10;
  10 - (-1) = 11
  11 + (-1) = 10

  another way;
  sort the value
  [-4, -1, 1, 3, 5, 6, 8, 11]
        L           R
  -4 + 11 = 7 == 10 ?
  -1 + 11 = 10 == 10 ?
*/

// function twoNumberSumAndGetTargetValue(arrNumbers, targetValue) {
//   let secondEntryNumber;
//   let captureCorrectValues = null;
//   arrNumbers.map((cur) => {
//     if (Array.isArray(captureCorrectValues)) return;
//     arrNumbers.map((_, idx) => {
//       secondEntryNumber = arrNumbers[Number(idx) + 1];
//       if (cur + secondEntryNumber === targetValue) {
//         captureCorrectValues = [cur, secondEntryNumber];
//       }
//     })
//   })
//   return captureCorrectValues;
// }

// const givenArrayNumbers = [3, 6, -4, 8, 11, 1, -1, 6];
// console.log(twoNumberSumAndGetTargetValue(givenArrayNumbers, 10));

// function twoNumberSumW1(arr, targetSum) {
//   let firstNum;
//   let secondNum;
//   for (let i = 0; i < arr.length - 1; i++) {
//     firstNum = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       secondNum = arr[j];
//       if (firstNum + secondNum === targetSum) {
//         return [firstNum, secondNum];
//       }
//     }
//   }
//   return [];
// }

// const givenArrayNumbers = [4, 6, -4, 8, 11, 1, -1, 6];
// console.log(twoNumberSumW1(givenArrayNumbers, 10));

// using hash map
function twoNumberSumW2(arr, targetSum) {
  const nums = {};
  let potentialMatch;
  for (const num of arr) {
    potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

const givenArrayNumbers = [4, 4, -4, 8, 11, 1, -1, 6];
console.log(twoNumberSumW2(givenArrayNumbers, 10));

// const start = Date.now();
// console.log("starting timer...");
// const arr = [3, 6, -4, 8, 11, 1, -1, 6];
// twoNumberSumW1(arr, 12);
// console.log(twoNumberSumW1(arr, 19));
// console.log(twoNumberSumW2(arr, 19));
// setTimeout(() => {
//   const millis = Date.now() - start;
//   console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
//   // expected output: seconds elapsed = 2
// }, 2000);
