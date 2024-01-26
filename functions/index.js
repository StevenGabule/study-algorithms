const square = (num) => {
  return num * num;
};

// console.log(square(10));

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
// console.log(power(2, 10))

// Nested scope
const hummus = (factor) => {
  const ingredient = (amount, unit, name) => {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += 's';
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, 'can', 'chickpeas');
  ingredient(0.25, 'cup', 'tahini');
  ingredient(0.25, 'cup', 'lemon juice');
  ingredient(1, 'clove', 'garlic');
  ingredient(2, 'tablespoon', 'olive oil');
  ingredient(0.5, 'teaspoon', 'cumin');
};

// hummus(10);

function wrapValue(n) {
  let local = n;
  return () => local;
}

let output = wrapValue(5);
// console.log(output());

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
// console.log(twice(5));

// recursion
function newPower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * newPower(base, exponent - 1);
}

// console.log(newPower(2,3)); // 8

// For example, the number 13 could be reached by first multiplying by 3 and
// then adding 5 twice, whereas the number 15 cannot be reached at all.
// Here is a recursive solution:
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, '1');
}

// console.log(findSolution(24)); // → (((1 * 3) + 5) * 3)

// We want to write a program that prints two numbers: the numbers of cows
// and chickens on a farm, with the words Cows and Chickens after them and zeros
// padded before both numbers so that they are always three digits long.
// 007 Cows
// 011 Chickens
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}

// printFarmInventory(7, 11);

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

function printPartTwo(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printPartTwo(7, 16, 5);

// Exercises
// Minimum
// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a
// number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
// another way to define whether a positive whole number is even or odd:
// 55
// • Zero is even.
// • One is odd.
// • For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The
// function should accept a single parameter (a positive, whole number) and return
// a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
// way to fix this?

// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example,
// "b"). The first
