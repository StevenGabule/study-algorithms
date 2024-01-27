function canYouSpotTheProblem() {
	"use strict";
	for (count = 0; count < 10; count++) {
		console.log("Happy happy");
	}
}

"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // forgot new
console.log(name);
// → TypeError: Cannot set property 'name' of undefined
// canYouSpotTheProblem(); // → ReferenceError: counter is not defined


// ** TEST
function test(label, body) {
	if (!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () => {
	return "hello".toUpperCase() == "HELLO";
});

test("convert Greek text to uppercase", () => {
	return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});

test("don't convert case-less characters", () => {
	return "􀟈􀠶􀢎􀰆􀯷".toUpperCase() == "􀟈􀠶􀢎􀰆􀯷";
});

// ** DEBUGGING
function numberToString(n, base = 10) {
	let result = "", sign = "";
	if (n < 0) {
		sign = "-";
		n = -n;
	}
	do {
		result = String(n % base) + result;
		n = Math.floor(n / base);
	} while (n > 0);
	return sign + result;
}
console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e…-3181.3

function promptNumber(question) {
	let result = Number(prompt(question));
	if (Number.isNaN(result)) return null;
	else return result;
}
console.log(promptNumber("How many trees do you see?"));

function lastElement(array) {
	if (array.length == 0) {
		return {failed: true};
	} else {
		return {element: array[array.length - 1]};
	}
}

function promptDirection(question) {
	let result = prompt(question);
	if (result.toLowerCase() == "left") return "L";
	if (result.toLowerCase() == "right") return "R";
	throw new Error("Invalid direction: " + result);
}

function look() {
	if (promptDirection("Which way?") == "L") {
		return "a house";
	} else {
		return "two angry bears";
	}
}

try {
	console.log("You see", look());
} catch (error) {
	console.log("Something went wrong: " + error);
}


// Cleaning up after exceptions
const accountsS = {
	a: 100,
	b: 0,
	c: 20
};

function getAccount() {
	let accountName = prompt("Enter an account name");
	if (!accountsS.hasOwnProperty(accountName)) {
		throw new Error(`No such account: ${accountName}`);
	}
	return accountName;
}

function transfer(from, amount) {
	if (accounts[from] < amount) return;
	let progress = 0;
	try {
		accounts[from] -= amount;
		progress = 1;
		accounts[getAccount()] += amount;
		progress = 2;
	} finally {
		if (progress == 1) {
			accounts[from] += amount;
		}
	}
}

for (;;) {
	try {
		let dir = promtDirection("Where?"); // ← typo!
		console.log("You chose ", dir);
		break;
	} catch (e) {
		console.log("Not a valid direction. Try again.");
	}
}

"use strict";
class Person {
	constructor(name) {
		this.name = name;
	}
}

let person = new Person('John')// forgot new
// → TypeError: Cannot set property 'name' of undefined
// console.log(person);


// Testing
function test(label, body) {
	if (!body()) console.log(`Failed: ${label}`);
}

// test("convert Latin text to uppercase", () => {
// 	return "hello".toUpperCase() == "HELLO";
// });

// test("convert Greek text to uppercase", () => {
// 	return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
// });

// test("don't convert case-less characters", () => {
// 	return "􀟈􀠶􀢎􀰆􀯷".toUpperCase() == "􀟈􀠶􀢎􀰆􀯷";
// })

// Debugging
function numberToString(n, base = 10) {
	let result = "", sign = "";

	if (n < 0) {
		sign = "-";
		n = -n;
	}

	do {
		result = String(n % base) + result;
		n /= base;
	} while (n > 0);

	return sign + result;
}

console.log(numberToString(13, 10)); // → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e…-3181.3

// Error propagation
function promptNumber(question) {
	let result = Number(prompt(question));
	if (Number.isNaN(result)) return null;
	else return result;
}
console.log(promptNumber("How many trees do you see?"));

function lastElement(array) {
	return array.length === 0 ? { failed: true } : { element: array[array.length - 1] };
}

function promptDirection(question) {
	let result = prompt(question);
	if (result.toLowerCase() == "left") return "L";
	if (result.toLowerCase() == "right") return "R";
	throw new Error("Invalid direction: " + result);
}

function look() {
	return promptDirection("Which way?") == "L" ? "a house" : "two angry bears"; 
}

try {
	console.log("You see", look());
} catch (error) {
	console.log("Something went wrong: " + error);
}

// ** Cleaning up after exceptions
// ** Here is some really bad banking code:
const accounts = { a: 100, b: 0, c: 20 };

function getAccount() {
	let accountName = prompt("Enter an account name");
	if (!accounts.hasOwnProperty(accountName)) {
		throw new Error(`No such account: ${accountName}`);
	}
	return accountName;
}

function transfer(from, amount) {
	if (accounts[from] < amount) return;
	let progress = 0;
	try {
		accounts[from] -= amount;
		progress = 1;
		accounts[getAccount()] += amount;
		progress = 2;
	} finally {
		if (progress == 1) {
			accounts[from] += amount;
		}
	}
}

// Selective catching

class InputError extends Error { }

function promptDirection(question) {
	let result = prompt(question)
	if (result.toLowerCase() == "left") return "L";
	if (result.toLowerCase() == "right") return "R";
	throw new InputError("Invalid direction: " + result)
}

for (; ;) {
	try {
		let dir = promptDirection("Where?"); // ← typo!
		console.log("You chose ", dir);
		break;
	} catch (e) {
		if (e instanceof InputError) {
			console.log("Not a valid direction. Try again.");
		} else {
			throw e;
		}
	}
}

// Assertions
function firstElement(array) {
	if (array.length == 0) {
		throw new Error("firstElement called with []");
	}
	return array[0];
}
