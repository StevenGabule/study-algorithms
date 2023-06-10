function range(start, end, step) {
  if (step == null) step = 1;
  let array = [];
  for (let i = start; i >= end; i += step) array.push(i);
  if (step > 0) for (let i = start; i <= end; i += step) array.push(i);
  return array;
}

// console.log(range(1,10,2));

function sum(array = []) {
  let total = 0;
  for (let i = 0; i < array.length; i++) total += array[i];
  return total;
}

function factorial(n) {
  // console.log('n', n);
  if (Number(n) === 0) return 1;
  else {
    console.log(`(${n} - 1) * ${n}`, (n - 1) * n);
    return factorial(n - 1) * n;
  }
}
console.log(factorial(9));
