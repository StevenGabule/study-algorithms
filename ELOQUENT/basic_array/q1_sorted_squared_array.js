const arrOfNumber = [-3,1,2,7];
const newArr = []
for (const x of arrOfNumber) {
  newArr.push(x*x)
}
// console.log(newArr.sort((a,b) => a - b))

function sortedSquared(array) {
  const newArray = new Array(array.length).fill(0);
  for(let i = 0; i < array.length; i++) {
    newArray[i] = Math.pow(array[i], 2);
  }
  newArray.sort((a,b) => a - b);
  return newArray;
}

const test1 = [1,3,4,5];
const test2 = [-7,-2,3,4,9];
const test3 = [];

// console.log(sortedSquared(test1))
// console.log(sortedSquared(test2))
// console.log(sortedSquared(test3))

function sortedSquaredArray(array) {
  const newArray = new Array(array.length).fill(0)
  let pointerLeft = 0;
  let pointerRight = array.length - 1;

  for(let i = array.length-1; i >= 0; i--) {
    const leftSquared = Math.pow(array[pointerLeft], 2);
    const rightSquared = Math.pow(array[pointerRight], 2);
    if(leftSquared > rightSquared) {
      newArray[i] = leftSquared;
      pointerLeft++;
    } else {
      newArray[i] = rightSquared;
      pointerRight--;
    }
  }
  return newArray;
}

console.log(sortedSquaredArray(test1))
console.log(sortedSquaredArray(test2))
console.log(sortedSquaredArray(test3))







