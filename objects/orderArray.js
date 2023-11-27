// var arrNums = [12, 23, 11, 3, 30];
// var tempValue;
// for (let i = 0; i < arrNums.length; i++) {
//   for (let j = 0; j < arrNums.length; j++){
//     if (arrNums[i] < arrNums[j]) {
//       tempValue = arrNums[i]
//       arrNums[i] = arrNums[j];
//       arrNums[j] = tempValue;
//     }
//   }
// }
      

// console.log(arrNums)

var array = [3, 1, 8, 2, 4, 9, 16, 28];
let tempV;
function sum(arr, i = 0) {
  if (i === arr.length) return arr;
  if (arr[i] < arr[i + 1]) {
    console.log(arr[i] < arr[i + 1], arr[i]);
    tempV = arr[i];
    arr[i] = arr[i + 1];
    arr[i+1] = tempV;
  }
  return sum(arr, i + 1);
}

console.log(sum(array))


