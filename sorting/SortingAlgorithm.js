const bubbleSort = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			if (nums[j] < nums[j - 1]) {
				let temp = nums[j];
				nums[j] = nums[j - 1];
				nums[j - 1] = temp;
			}
		}
	}
	return nums;
}

const insertionSort = (nums) => {
	for (let i = 1; i < nums.length; i++) {
		while (nums[i - 1] > nums[i]) {
			let temp = nums[i];
			nums[i] = nums[i - 1];
			nums[i - 1] = temp;
			i -= 1;
		}
	}
	return nums;
}

const selectionSort = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		let currMin = i;
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] < nums[currMin]) {
				currMin = j;
			}
		}
		if (currMin !== i) {
			let temp = nums[i];
			nums[i] = nums[currMin];
			nums[currMin] = temp;
		}
	}
	return nums;
}

console.log(bubbleSort([3, 51, 5, 2, 11]));
console.log(insertionSort([3, 51, 5, 2, 1]));
console.log(selectionSort([113, 51, 5, 22, 111, 300, 400]));