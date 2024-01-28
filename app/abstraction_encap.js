'use strict';

 function log(con) {
	console.log(con)
 }
 
 class Film {
	 #name;
	 #author;
	 #length;
	 rating;
	 
	 constructor(name, author, length) {
		 this.#name = name;
		 this.#author = author;
		 this.#length = length;
	 }
	 
	 get name() {
		 return this.#name;
	 }
	 
	 get author() {
		 return this.#author;
	 }
	 
	 get length() {
		 return this.#length;
	 }
	 
 }
 
const film = new Film('Avatar', 'Cameron', 240);
log(film);

const Book = function(title,author) {
	this.title = title;
	this.author = author;
}
 
Book.prototype.buy = function() {
	log('Buy!')
}
 
const AudioBook = function(title, author, lenMin) {
 Book.call(this, title, author);
 this.lenMin = lenMin;
} 
 
AudioBook.prototype = Object.create(Book.prototype);
 
AudioBook.prototype.log = function() {
	log(`${this.title} - ${this.lenMin}`);
}
 
const book = new AudioBook('Lord of The Rings', 'token', 20 * 60);
book.log();
book.buy();
log(book)
 
class BookClass {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
	buy() {
		log('Buy!')
	}
} 

class AudioBookClass extends BookClass {
	constructor(title, author, lenMin) {
		super(title, author);
		this.lenMin = lenMin;
	}
	log() {
		console.log(`${this.title} - ${this.lenMin}`);
	}
}

const newBook = new AudioBookClass('Lord of The Rings', 'token', 20 * 60);
newBook.log();
newBook.buy();
 
class Enemy {
	health;
	constructor(health) {
		this.health = health;
	}
	
	recieveDamage(damage) {
		this.health = this.health - damage;
		console.log(this.health);
	}
} 

class Sword {
	#damage;
	constructor(damage) {
		this.#damage = damage;
	}
	strike(enemy) {
		enemy.recieveDamage(this.#damage)
	}
}

class Orc extends Enemy {
	recieveDamage(damage) {
		if(Math.random() > 0.5) {
			this.health = this.health - damage;
		}
		console.log(this.health);
	}
}

class Troll extends Enemy {}

const enemy = new Orc(10);
const enemy2 = new Troll(20);
const sword = new Sword(3);
sword.strike(enemy); 
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy2);
 
class Wallet {
	balance = 0;
	
	add(sum) { 
		this.balance += sum;
		return this;
	}
	remove(sum) { 
		this.balance -= sum;
		return this;
	}
}
 
const wallet = new Wallet();
const res = wallet.add(100).remove(30).add(11);
log(res)

class Builder {
	house = {};
	
	addRoof() {
		this.house.roof = 'Roof';
		return this;
	}
	
	addFloor() {
		this.house.foor = 'Floor';
		return this;
	}
	
	execute() {
		return this.house;
	}	
	
}

const res2 = new Builder().addRoof().addFloor().execute();
log(res2)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 