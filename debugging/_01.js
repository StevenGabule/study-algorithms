function canYouSpotTheProblem() {
	"use strict";
	for (count = 0; count < 10; count++) {
		console.log("Happy happy");
	}
}

// canYouSpotTheProblem(); // → ReferenceError: counter is not defined

"use strict";
function Person(name) {
	this.name = name;
}

let person = Person('John')
console.log(person);






