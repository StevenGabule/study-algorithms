// method: Insertion
function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let j = i - 1;
		let temp = array[i];
		while (j >= 0 && array[j] > temp) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = temp;
	}
	return array;
}

console.log(insertionSort([1, 2, 3, 5, 5, 5, 3, 4, 1, 0, -1, 30, 90, 66, 44, 66]));
//[
// -1, 0, 1, 1, 2, 3,
// 	3, 4, 5, 5, 5, 30,
// 	44, 66, 66, 90
// ]