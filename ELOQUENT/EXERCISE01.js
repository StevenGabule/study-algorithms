// looping a triangle
// expected result:
// #
// # #
// # # #
// # # # #
// # # # # #
// # # # # # #
// # # # # # # #

// for(let i = 0; i <= 6; i++) {
//   let hashSym = "";
//   for(let x = 0; x <= i; x++) {
//     hashSym = hashSym + "# "
//   }
//   console.log(hashSym)
// }

// FizzBuzz
// scenario:
// print number from 1 ... 100
// if the current number in the loop is divisible by 3 then display fizz instead of number
// and also if the current number in the loop is divisible by 5 then display buzz instead of number
// but if  current number is divisible by 3 and 5 then print FizzBuzz

// for (let index = 1; index <= 100; index++) {
//   if(index % 3 === 0 && index % 5 === 0) {
//     console.log("FizzBuzz")
//     continue;
//   } 
//   if(index % 3 === 0) {
//     console.log("Fizz")
//     continue;
//   }
  
//   if(index % 5 === 0) {
//     console.log("Buzz")
//     continue;
//   }
//   console.log(index)
// }

// Chessboard

const width = 4;
const height = 8;

let space = true;
for (let index = 0; index < height; index++) {
  let hashSym = "";
  for (let index1 = 0; index1 < width; index1++) {
    if(space) {
      hashSym = hashSym + " #"
    } else {
      hashSym = hashSym + "# "
    }
  }
  space = !space;
  console.log(hashSym)
}

