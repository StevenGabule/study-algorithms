/*
	** BubbleSort
		** soft the elements from higher to lowest number or either l to h
*/
const arr = [2, 4, 11, 5, -1, 0, 4, 13];
// console.log(arr.sort((a,b) => a - b));

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr.length - i - 1; j++) {
// 		if (arr[j + 1] > arr[j]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] 
// 	}	
// }

// console.log(arr);

/*
 * ** INSERTION SORT 
 */
// function insertionSort(arr) {
// 	for (let i = 1; i < arr.length; i++) {
// 		for (let j = i - 1; j > -1; j--) {
// 			if (arr[j + 1] > arr[j]) {
// 				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] 
// 			}
// 		}
// 	}
// 	return arr;
// }

// console.log(insertionSort(arr)); // [13, 11, 5, 4,4, 2, 0]


/*
 * ** SELECTION SORT 
 */
function selectionSort(arr) {
	let min;

	for (let i = 0; i < arr.length; i++) {
		// index of the smallest element to be the ith element.
		min = i;

		// Check through the rest of the array for a lesser element
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j
			}
		}

		if (min !== i) {
			[arr[i], arr[min]] = [arr[min], arr[i]];
		}
	}
	return arr;
}

// console.log(selectionSort(arr));

// ** MERGE SORT
const numMergeSort = [10, 70, 50, 30, 10, 20, 40, 60];

function merge(arr1, arr2) {
	// make a new array and have two value pointers
	let res = [];
	let i = 0;
	let j = 0;

	// sorting the first array
	if (arr1.length > 1) {
		let min = 0;
		for (let i = 0; i < arr1.length; i++) {
			if (i !== min) {
				if (arr1[i] < arr1[min]) {
					// also swap the elements
					[arr1[i], arr1[min]] = [arr1[min], arr1[i]];
					// change the minimum
					min = i;
				}
			}
		}
	}

	// sorting the second array.
	if (arr2.length > 1) {
		let min = 0;
		for (let i = 0; i < arr2.length; i++) {
			if (i !== min) {
				if (arr2[i] < arr2[min]) {
					// also swap the elements
					[arr2[i], arr2[min]] = [arr2[min], arr2[i]];
					// change the minimum
					min = i;
				}
			}
		}
	}

	// value comparison
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			res.push(arr1[i]);
			i++;
		} else {
			res.push(arr2[j]);
			j++;
		}
	}

	// pushing the rest of arr1
	while (i < arr1.length) {
		res.push(arr1[i])
		i++;
	}

	// pushing the rest of arr2
	while (j < arr2.length) {
		res.push(arr2[j]);
		j++;
	}

	return res;
}

// merge sort
function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	// splitting into halves
	let mid = Math.ceil(arr.length / 2)
	let arr1 = arr.slice(0, mid)
	let arr2 = arr.slice(mid)

	let arr1_subarrays = []
	let sorted_arr1_subarrays = []

	let arr2_subarrays = []
	let sorted_arr2_subarrays = []

	// loop through array 1 making subarrays of two elements
	for (let i = 0; i < arr1.length; i += 2) {
		arr1_subarrays.push(arr1.slice(i, i + 2));
	}

	//loop through array 2 making subarrays of two elements.
	for (let i = 0; i < arr2.length; i += 2) {
		arr2_subarrays.push(arr2.slice(i, i + 2))
	}

	// sorting each subarray of arr1.
	for (let i = 0; i < arr1_subarrays.length; i += 2) {
		let result = merge(arr1_subarrays[i], arr1_subarrays[i + 1]);
		result.forEach((value) => sorted_arr1_subarrays.push(value))
	}

	// sorting each subarray of arr2.
	for (let i = 0; i < arr2_subarrays.length; i += 2) {
		let result = merge(arr2_subarrays[i], arr2_subarrays[i + 1]);
		result.forEach((value) => sorted_arr2_subarrays.push(value))
	}

	return merge(sorted_arr1_subarrays, sorted_arr2_subarrays);
}

// console.log(mergeSort(numMergeSort));

// expected output:
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9
let ar = [];
let numString = "";
for (let i = 1; i <= 5; i++) {
	for (let j = 0; j < i; j++) {
		numString += j + i + " ";
	}
	console.log(numString);
	numString = "";
}
