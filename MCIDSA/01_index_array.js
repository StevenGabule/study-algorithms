// -- {QUICKSORT} BRUTE FORCE METHOD: 1
function sortedSquared(array) {
	const newArray = new Array(array.length).fill(0);
	for (let i = 0; i < array.length; i++) {
		newArray[i] = Math.pow(array[i], 2);
	}
	newArray.sort((a, b) => a - b);
	return newArray;
}

// console.log(sortedSquared([4, 30, 1, 5, 6]));
// console.log(sortedSquared([]));

function sortedSquarredArray(nums) {
	const newArray = new Array(nums.length).fill(0);
	let pointerLeft = 0;
	let pointerRight = nums.length - 1;
	let leftSquared = 0;
	let rightSquared = 0;
	for (let i = nums.length - 1; i >= 0; i--) {
		leftSquared = Math.pow(nums[pointerLeft], 2);
		rightSquared = Math.pow(nums[pointerRight], 2);

		if (leftSquared > rightSquared) {
			newArray[i] = leftSquared;
			pointerLeft = pointerLeft + 1;
		} else {
			newArray[i] = rightSquared;
			pointerRight = pointerRight - 1;
		}
	}
	return newArray;
}

// console.log(sortedSquarredArray([4, 20, 30, 1, 5, 6]));
// console.log(sortedSquarredArray([]));

const a = [1, 4, 5, 7];
const b = [-6, -1, 0, 5, 10];
const c = [];
// console.log(sortedSquarredArray(a));
// console.log(sortedSquarredArray(b));
// console.log(sortedSquarredArray(c));

function checkMonotonic(nums) {
	const first = nums[0];
	const last = nums[nums.length - 1];
	if (first === last) {
		for (let i = 0; i < nums.length - 1; i++) {
			if (nums[i + 1] !== nums[i]) return false;
		}
	} else if (first < last) {
		// non-decreasing
		for (let i = 0; i < nums.length - 1; i++) {
			if (nums[i + 1] < nums[i]) return false;
		}
	} else {
		// non-increasing
		for (let i = 0; i < nums.length - 1; i++) {
			if (nums[i + 1] > nums[i]) return false;
		}
	}
	return true;
}

// console.log(checkMonotonic([1, 2, 3]));
// console.log(checkMonotonic([1, 1, 1]));
// console.log(checkMonotonic([1, 2, 1]));
// console.log(checkMonotonic([1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]));
// console.log(checkMonotonic([44, 44, 44, 44, 44, 44, 44, 44, 44, 3, 44]));
// console.log(checkMonotonic([1, 2, 3, 6, 10, 55, 100]));

// brute force method:
const rotateArray = function (array, k) {
	const length = array.length;
	k = k % length;
	const temp = array.slice(length - k);
	for (let i = length - k - 1; i >= 0; i--) {
		array[i + k] = array[i];
	}
	for (let i = 0; i < k; i++) {
		array[i] = temp[i];
	}
	return array;
}

// console.log(rotateArray([1,2,3,4], 3));
// console.log(rotateArray([1,2,3,4], 0));
// console.log(rotateArray([1,2,3,4], 4));

// reverse the array by the given input
const reverse = function (nums, start, end) {
	while (start < end) {
		[nums[start], nums[end]] = [nums[end], nums[start]];
		start++;
		end--;
	}
}

const rotate = function (nums, k) {
	k = k % nums.length;
	reverse(nums, 0, nums.length - 1);
	reverse(nums, 0, k - 1);
	reverse(nums, k, nums.length - 1);
	return nums;
}

// console.log(rotate([1, 2, 3, 4, 5], 3));
// console.log(rotate([1, 2, 3, 4, 5], 0));
// console.log(rotate([1, 2, 3, 4, 5], 5));

const maxAreaBF = function (array) {
	let area = 0;
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			const height = Math.min(array[i], array[j]);
			const width = (j - i);
			area = Math.max(area, height * width);
		}
	}
	return area;
}

// console.log(maxAreaBF([3, 7, 5, 6, 8, 4]));
// console.log(maxAreaBF([]));
// console.log(maxAreaBF([9,1,2,3,10]));

const maxArea = (array) => {
	let area = 0;
	let i = 0;
	let j = array.length - 1;
	while (i < j) {
		let height = Math.min(array[i], array[j]);
		let newArea = height * (j - i);
		area = Math.max(area, newArea);
		if (array[i] < array[j]) i++;
		else j--;
	}
	return area;
}

console.log(maxArea([3, 7, 5, 6, 8, 4])); // 21
console.log(maxArea([])); // 0
console.log(maxArea([9, 1, 2, 3, 10])); // 36