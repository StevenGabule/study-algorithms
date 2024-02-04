// ** print a pine tree
/*
							*
						* * *
					* * * * *
				*	* * * * * *
			*	*	* * * * * * *
		*	*	*	* * * * * * * *
	*	*	*	*	* * * * * * * * *

	** Investigation part:
		-> when the current number is odd it will render 2 more *
		-> must be loop based on the height 
*/

function printPineTree(height) {
  for (let i = 0; i <= height; i++) {
    var star = '';
		var space = height - i;

		for (let w = 1; w <= (space + 1); w++) {
			star += ' '
		}
		var zero = 2 * i + 1;
		for (let e = 0; e < zero; e++) {
			star += "*"
		}
		console.log(star);
  }
}

// printPineTree(10);

function twoSum(arr, target) {
	let i = 0;
	let j = 0;
	let firstNum = 0;
	let secondNum = 0;

	for (i in Array.from(Array(arr.length - 1).keys())) {
		firstNum = arr[i];
		for (j in Array.from((i + 1, Array(arr.length - 1).keys()))) {
			secondNum = arr[j];
			if (secondNum + firstNum === target) {
				return [i, j];
			}
		}
	}
	return [];
}

const arr = [-4, -1, 1, 3, 5, 6, 8, 11];
// console.log(twoSum(arr, 13))

const newArr = [
	['', '1', '2', '3'],
	['12', '13', '42', '443'],
	['213', '15', '25', '5123'],
];

console.log(newArr[1].splice(1, 1));;
console.log(newArr);

