function powerSum(arr, pw = 1) {
	let sum = 0;

	for (const elem of arr) {
		if (Array.isArray(elem)) {
			sum += powerSum(elem, pw + 1)
		} else {
			sum += elem;
		}
	}

	return Math.pow(sum, pw);
}

let arr = [1, 2, [3, 4], [[2]]];
console.log(powerSum(arr));