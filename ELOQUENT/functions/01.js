const f = (x) => x * x * x;

function map(f, a) {
  let result = []
  for(let i = 0; i !== a.length; i++) {
    result[i] = f(a[i])
  }
  return result;
}

let numbers = [0,1,2,5,10]
let cube = map(f, numbers);
console.log(cube)

