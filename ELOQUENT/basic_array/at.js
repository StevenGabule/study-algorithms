const arr1 = [5, 12, 8, 130, 44];
let index = 2;

console.log(arr1.at(index)); // 8

index = -2;

console.log(arr1.at(index)); // 130

function returnLast(arr) {
	return arr.at(-1);
}

console.log(returnLast(arr1));// 44