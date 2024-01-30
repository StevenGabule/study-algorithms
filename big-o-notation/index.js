function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total +=i;
  }
  return total;
}

function addUpTo2(n) {
  return n * (n + 1) / 2;
}

console.log(addUpTo1(6));
console.log(addUpTo2(6));

// EXAMPLES:
// 1: O(n) - linear time
// An example of an O(n) algorithm is printing numbers 
// from 0 to n-1, as shown here:
function linear(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// 2: Similarly, O(n2) is quadratic time. Examples of these 
// complexities are shown here:
function quadratic(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}

// 3: O(n3) is cubic time
function cubic(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let h = 0; h < n; h++) {
        console.log(i,j, h)
      }
    }
  }
}
