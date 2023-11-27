function findSolution(target) {
  function find(start, history) {
    if (start === target) return history;
    else if (start > target) return null;
    else return (find(start + 5, "(" + history + "+ 5)") || find(start * 3, "(" + history + " * 3)"))
  }

  return find(1, "1")
}

// console.log(findSolution(36))

function forEach(arr, action) {
  let names = arr.length;
  for(let i = 0; i < names; i++) {
    action(arr[i])
  }
}

forEach(['John doe', 'Jane doe', 'John wick'], console.log);
