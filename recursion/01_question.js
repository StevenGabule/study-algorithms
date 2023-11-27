// function fibonacci(n) {
// 	if(n <= 1) return n;
// 	else return fibonacci(n-1) + fibonacci(n-2);
// }

// // 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// console.log(fibonacci(21)); // 10946

// function fibonacci(n) {
// 	const ht = { 0: 0, 1: 1, }
// 	if (n in ht) return ht[n]
// 	else {
// 		ht[n] = fibonacci(n - 1) + fibonacci(n - 2);
// 		return ht[n];
// 	}
// }
// console.log(fibonacci(8)); // 21
// console.log(fibonacci(4)); // 3

function fibonacci(n) {
	if(n <= 1) return n;

	let counter = 1;
	let prev = 0;
	let curr = 1;
	let next;

	while (counter < n) {
		next = prev + curr;
		prev = curr;
		curr = next;
		counter++;
	}

	return curr;
}

console.log(fibonacci(8)); // 21
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
