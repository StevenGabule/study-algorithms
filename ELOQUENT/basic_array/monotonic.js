const checkMonotonic = (array) => {
  const first =  array[0];
  const last = array[array.length - 1];
  if (first === last) {
    for(let i = 0; i < array.length - 1; i++) {
      if (array[i+1] !== array[i]) return false
    }
  } else if(first < last) {
    // non-decreasing
    for (let i = 0; i < array.length - 1;i++) {
      if(array[i+1] < array[i]) return false;
    }
  } else {
    // non increasing
    for (let i = 0; i < array.length - 1; i++) {
      if(array[i+1] > array[i]) return false;
    }
  }
  return true;
}

console.log(checkMonotonic([1, 2, 3])); // T
console.log(checkMonotonic([3, 3, 3])); // T
console.log(checkMonotonic([1, 2, 3, 2, 1])); // F
console.log(checkMonotonic([3, 3, 4, 5])); // T
console.log(checkMonotonic([3])); // T
console.log(checkMonotonic([])); // T
console.log(checkMonotonic([5, 4, 3, 2, 1, -1])); // T
console.log(checkMonotonic([5, 4, 3, 2, 122, -1])); // F
