const person = {
	name: ['bob', 'smith'],
	age: 32,
	bio() {
		console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
	},
	introduceSelf() {
		console.log(`Hi, I'm ${this.name[0]}`);
	}
}

person.name;
person.name[0];
person.age;
person.bio(); 					// "Bob Smith is 32 years old."
person.introduceSelf();	// "Hi! I'm Bob."

function logProperty(propertyName) {
	console.log(person[propertyName]);
}

logProperty("name"); // ["Bob", "Smith"]
logProperty("age"); // 32

// Setting object members
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
person["eyes"];
person.farewell();

function Person(name) {
	this.name = name;
	this.introduceSelf = function() {
		console.log(`Hi,I'm ${this.name}.`);
	};
}

const salva = new Person("Salva");
salva.introduceSelf(); // "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf(); // "Hi! I'm Frankie."
