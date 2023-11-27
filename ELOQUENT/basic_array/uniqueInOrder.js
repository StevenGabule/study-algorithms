/*
* Implement the function unique_in_order which takes as argument a sequence and returns a list of items
* without any elements with the same value next to each other and preserving the original order of elements
*
* For example:
* uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
* uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
* uniqueInOrder([1,2,2,3,3])       == [1,2,3]
* */

const uniqueInOrder = (iterable) => {
  let _array = []
  let temp;
  let _split = Array.isArray(iterable) ? iterable : iterable.split('')
  for (let i = 0; i < _split.length; i++) {
    temp = _split[i]
    if(temp !== _split[i+1]) {
      _array.push(temp)
    }
  }
  return _array;
}

const uniqueInOrder1 = (iterable) => [...iterable].filter((v, i) => v !== iterable[i+1])
const uniqueInOrder2 = (iterable) => [].filter.call(iterable, (a, i) => iterable[i-1] !== a)

console.log(uniqueInOrder2('AAAABBBCCDAABBB'));
console.log(uniqueInOrder2('ABBCcAD'));
console.log(uniqueInOrder2([1,2,2,3,3]));

