// @ts-check

const inp = [12, 1, 4, -3, 7, 11, 15];
const target = 9;
// output: [0,1]

function twoSum(inputs, target) {
	const hashmap = {};
	for (let i = 0; i < inputs.length; i++) {
		const res = target - inputs[i];
		if (res in hashmap) {
			return [inp.indexOf(res), i];
		} else {
			hashmap[inputs[i]] = true;
		}
	}
	return [];
}

// console.log(twoSum(inp, target));

// factorial
// ex: 5 x 4 x 3 x 2 x 1 = 120
// exp: 120

let givenNumber = 5;
let total = givenNumber;
while (givenNumber > 1) {
	total = total * (givenNumber - 1);
	givenNumber--;
}
console.log(total);