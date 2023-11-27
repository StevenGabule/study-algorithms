function BubbleSort(array) {
	let sorted = false;
	let counter = 0;

	while (!sorted) {
		sorted = true;

		for (let i = 0; i < array.length - 1 - counter; i++) {
			if (array[i] > array[i + 1]) {
				swap(array, i)
				sorted = false;
			}
		}
		counter++;
	}
	return array;
}

function swap(array, i) {
	let temp = array[i];
	array[i] = array[i + 1];
	array[i + 1] = temp;
}

// console.log(BubbleSort([1,2,3,5,5,5,3,4])); // [ 1, 2, 3, 3, 4, 5, 5, 5 ]

