/*
 *  Check if an array contains a certain item
 *  This example shows two ways to check if the fruits array contains "Banana" and "Cherry":
 *  first with the includes() method,
 *  and then with the indexOf() method to test for an index value that's not -1.
*/

const fruits = ['Apple', 'Banana'];

fruits.includes('Banana'); // true
fruits.includes('Cherry'); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf('Banana') !== -1; // true
fruits.indexOf('Cherry') !== -1; // false

/*
 *  Remove multiple items from the end of an array
 *  This example uses the splice() method to remove the last 3 items from the fruits array.
*/
const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits); // ["Apple", "Banana"]
console.log(removedItems); // ["Strawberry", "Mango", "Cherry"]

/*
* Truncate an array down to just its first N items
* This example uses the splice() method to truncate the fruits array down to just its first 2 items.
* */

const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
const start = 2;
const removedItems = fruits.splice(start);
console.log(fruits);        // ["Apple", "Banana"]
console.log(removedItems);  // ["Strawberry", "Mango", "Cherry"]

/*
* Remove the first item from an array
* This example uses the shift() method to remove the first item from the fruits array.
* - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - - - - -
* Remove multiple items from the beginning of an array
* This example uses the splice() method to remove the first 3 items from the fruits array.
*/
const fruits = ['Apple', 'Strawberry', 'Cherry', 'Banana', 'Mango'];
const start = 0;
const deleteCount = 3;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);      // ["Banana", "Mango"]
console.log(removedItems);// ["Apple", "Strawberry", "Cherry"]

/*
* Add a new first item to an array
* This example uses the unshift() method to add, at index 0, a new item to the fruits array — making it the new first item in the array.
*/

/*
* Remove a single item by index
* This example uses the splice() method to remove the string "Banana"
* from the fruits array — by specifying
* the index position of "Banana".
*/
const fruits = ['Strawberry', 'Banana', 'Mango'];
const start = fruits.indexOf('Banana');
const removedItems = fruits.splice(start, 1);
console.log(fruits); // ["Strawberry", "Mango"]
console.log(removedItems); // ["Banana"]

/*
* Replace multiple items in an array
* This example uses the splice() method to replace the last 2 items in the fruits array with new items.
*/
const fruits = ['Apple', 'Banana', 'Strawberry'];
const start = -2;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount, 'Mango', 'Cherry');
console.log(fruits); // ["Apple", "Mango", "Cherry"]
console.log(removedItems); // ["Banana", "Strawberry"]

/*
* Iterate over an array
* This example uses a for...of loop to iterate over the fruits array, logging each item to the console.
*/
const fruits = ['Apple', 'Mango', 'Cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}
// Apple
// Mango
// Cherry

/*
* Call a function on each element in an array
* This example uses the forEach() method to call a function on each element in the fruits array;
* the function causes each item to be logged to the console, along with the item's index number.
*/
const fruits = ['Apple', 'Mango', 'Cherry'];
fruits.forEach((item, index, array) => {
  console.log(item, index);
});
// Apple 0
// Mango 1
// Cherry 2

/*
* Merge multiple arrays together
* This example uses the concat() method to merge the fruits array with a moreFruits array, to produce a
* new combinedFruits array. Notice that fruits and moreFruits remain unchanged.
*/
const fruits = ['Apple', 'Banana', 'Strawberry'];
const moreFruits = ['Mango', 'Cherry'];
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits); // ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// The 'fruits' array remains unchanged.
console.log(fruits); // ["Apple", "Banana", "Strawberry"]

// The 'moreFruits' array also remains unchanged.
console.log(moreFruits); // ["Mango", "Cherry"]

/*
* SIDE NOTE:
* All built-in array-copy operations (spread syntax, Array.from(), Array.prototype.slice(),
* and Array.prototype.concat()) create shallow copies. If you instead want a deep copy of an array,
* you can use JSON.stringify() to convert the array to a JSON string, and then JSON.parse() to convert
* the string back into a new array that's completely independent from the original array.
*/

const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));

/*
* Grouping the elements of an array
* The Array.prototype.group() methods can be used to group the elements of an array, using a test function that
* returns a string indicating the group of the current element.
*
* Here we have a simple inventory array that contains "food" objects that have a name and a type.
*/
const inventory = [
  { name: 'asparagus', type: 'vegetables' },
  { name: 'bananas',  type: 'fruit' },
  { name: 'goat', type: 'meat' },
  { name: 'cherries', type: 'fruit' },
  { name: 'fish', type: 'meat' },
];

const result = inventory.group(({ type }) => type);
console.log(result.vegetables); // expected output: Array [Object { name: "asparagus", type: "vegetables" }]

/*
* Creating a two-dimensional array
* The following creates a chessboard as a two-dimensional array of strings. The first move is made by copying the 'p'
* in board[6][4] to board[4][4]. The old position at [6][4] is made blank.
*/
const board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

console.log(`${board.join('\n')}\n\n`);

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));

// Here is the output:
// R,N,B,Q,K,B,N,R
// P,P,P,P,P,P,P,P
//   , , , , , , ,
//   , , , , , , ,
//   , , , , , , ,
//   , , , , , , ,
// p,p,p,p,p,p,p,p
// r,n,b,q,k,b,n,r

// R,N,B,Q,K,B,N,R
// P,P,P,P,P,P,P,P
//   , , , , , , ,
//   , , , , , , ,
//   , , , ,p, , ,
//   , , , , , , ,
// p,p,p,p, ,p,p,p
// r,n,b,q,k,b,n,r

//Using an array to tabulate a set of values
const values = [];
for (let x = 0; x < 10; x++) {
  values.push([
    2 ** x,
    2 * x ** 2,
  ]);
}
console.table(values);
// The first column is the index
// 0  1    0
// 1  2    2
// 2  4    8
// 3  8    18
// 4  16   32
// 5  32   50
// 6  64   72
// 7  128  98
// 8  256  128
// 9  512  162




































