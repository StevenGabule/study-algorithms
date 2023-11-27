const myObject = {
	city: 'Madrid',
	greet() {
		console.log(`Greetings from ${this.city}`);
	}
}

myObject.greet();

const personPrototype = {
	greet() {
		console.log(`Hello, my name is ${this.name}!`);
	}
}

function Person(name) {
	this.name = name;
}

Object.assign(Person.prototype, personPrototype);
const rouben = new Person("Robin")
rouben.greet();

const irma = new Person("Irma");
console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false














