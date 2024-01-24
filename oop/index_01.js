// const alien1 = {
// 	name: 'Ali',
// 	species: 'alien',
// 	phrase: () => console.log("I'm ali the alien!"),
// 	fly: () => console.log('Zzzzziiiiinnnnngggggg'),
// };

// const alien2 = {
// 	name: 'Lien',
// 	species: 'alien',
// 	sayPhrase: () => console.log("Run for your lives!"),
// 	fly: () => console.log('Zzzzziiiiinnnnngggggg'),
// };

// const bug1 = {
//     name: "Buggy",
//     species: "bug",
//     sayPhrase: () => console.log("Your debugger doesn't work with me!"),
//     hide: () => console.log("You can't catch me now!")
// }

// const bug2 = {
//     name: "Erik",
//     species: "bug",
//     sayPhrase: () => console.log("I drink decaf!"),
//     hide: () => console.log("You can't catch me now!")
// }

// const Robot1 = {
//     name: "Tito",
//     species: "robot",
//     sayPhrase: () => console.log("I can cook, swim and dance!"),
//     transform: () => console.log("Optimus prime!")
// }

// const Robot2 = {
//     name: "Terminator",
//     species: "robot",
//     sayPhrase: () => console.log("Hasta la vista, baby!"),
//     transform: () => console.log("Optimus prime!")
// }

// console.log(alien1.name) // output: "Ali"
// console.log(bug2.species) // output: "bug"
// Robot1.sayPhrase() // output: "I can cook, swim and dance!"
// Robot2.transform() // output: "Optimus prime!"

class Character {
	constructor(speed) {
		this.speed = speed;
	}
	move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
	constructor(name, phrase, power, speed) {
		super(speed)
		this.name = name;
		this.phrase = phrase;
		this.power = power;
	}
	sayPhrase = () => console.log(this.phrase)
	attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
	// fly = () => console.log('Zzzzzziiiiiinnnnnggggg!!')
}

class Alien extends Enemy {
	#birthYear;

	constructor(name, phrase, power, speed, birthYear) {
		super(name, phrase, power, speed);
		this.species = 'alien';
		this.#birthYear = birthYear
	}
	attack = () => console.log("Now I'm doing a different thing, HA!") // Override the parent method.
	howOld = () => console.log(`I was born in ${this.#birthYear}`)
}

class Bug extends Enemy {
	constructor(name, phrase, power, speed) {
		super(name, phrase, power, speed);
		this.species = 'bug';
	}
	hide = () => console.log("You can't catch me now!");
}

class Robot extends Enemy {
	constructor(name, phrase, power, speed) {
		super(name, phrase, power, speed)
		this.species = 'robot';
	}
	transform = () => console.log("Optimus prime!");
}

// const alien1 = new Alien("Ali", "I'm Ali the alien!")
// We use the "new" keyword followed by the corresponding class name
// and pass it the corresponding parameters according to what was declared in the class constructor function
// const alien2 = new Alien("Lien", "Run for your lives!")
// const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!")
// const bug2 = new Bug("Erik", "I drink decaf!")
// const Robot1 = new Robot("Tito", "I can cook, swim and dance!")
// const Robot2 = new Robot("Terminator", "Hasta la vista, baby!")

// console.log(alien1.name) // output: "Ali"
// console.log(bug2.species) // output: "bug"
// Robot1.sayPhrase() // output: "I can cook, swim and dance!"
// Robot2.transform() // output: "Optimus prime!"

// implement the principles of OOP
// const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 10)
// const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 15)

// console.log(bug1.power) //output: 10
// Robot1.attack() // output: "I'm attacking with a power of 15!"

// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
// const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)

// alien1.move() // output: "I'm moving at the speed of 50!"
// console.log(alien2.speed) // output: 60

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)

const addFlyingAbility = obj => {
	obj.fly = () => console.log(`Now ${obj.name} can fly!`);
}

addFlyingAbility(bug1);
bug1.fly() // output: "Now Buggy can fly!"

const bug2 = new Bug("Erik", "I drink decaf!", 5, 120)
const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30)
const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40)


