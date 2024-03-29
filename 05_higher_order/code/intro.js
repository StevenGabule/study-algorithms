function range(start, end, step) {
  if (step == null) step = 1;
  let array = [];
  for (let i = start; i >= end; i += step) array.push(i);
  return array;
}

function sum(array = []) {
  let total = 0;
  for (let i = 0; i < array.length; i++) total += array[i];
  return total;
}

function factorial(n) {
  if (Number(n) === 0) return 1;
  return factorial(n - 1) * n;
}

console.log(factorial(9));
