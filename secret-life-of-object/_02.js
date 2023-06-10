const person = {
	name: ['bob', 'smith'],
	age: 32,
	bio: function() {
		console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
	},
	introduceSelf: function() {
		console.log(`Hi, I'm ${this.name[0]}.`);
	}
}

person.name;
person.name[0];
person.age;
person.bio(); // "Bob Smith is 32 years old."
person.introduceSelf(); // "Hi! I'm Bob."
