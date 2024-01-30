'use strict';

 function log(con) {
	console.log(con)
 }
 
class Character {
	#inventory = [];
	#health = 10;
	
	pickItem(item) {
		this.#inventory.push(item);
	}
	
	recieveDamage(damage) {
		this.#health -= damage;
	}
	
	saveCharacter() {
		localStorage.setItem('char', this);
	}
	
}

class DB {
	save(item) {
		localStorage.setItem('char', item);
	}
	load() {
		//...
	}
}

class Treasure { value = 0 }
class Coin extends Treasure { value = 10 }
class Crystal extends Treasure { value = 20 }
class Brilliant extends Treasure { value = 30 }
class Inventory {
	#score;
	pick(treasure) {
		if(treasure instanceof Coin) {
			this.#score += 1;
		}
		if(treasure instanceof Crystal) {
			this.#score += 10;
		}
		this.#score += treasure.value;
	}
}

class UserClass {
	#role = 'user';
	
	getRole() {
		return this.#role;
	}
}

class AdminClass extends UserClass {
	#role = ['user', 'admin'];
	
	getRole() {
		return this.#role.join(', ');
	}
}

function logRole(user) {
	console.log('Role: ' + user .getRole().toUpperCase());
}

logRole(new UserClass());
logRole(new AdminClass());

class Weapon {
	cost;
	strike() {}
	shoot() {}
	
	dealDamage() {}
}

class Rifle extends Weapon {
	strike() {}
	shoot() {
		this.dealDamage();
	}
}

class Sword extends Weapon {
	strike() {}
	shoot() {
		this.dealDamage();
	}
}


class DBClass {
	save(items) {
		console.log(`Saved: ${items}`)
	}
}

class MongoDBClass extends DBClass {
	save(items) {
		console.log(`Saved to Mongo: ${items}`)
	}
}

class TodoList {
	items = [1, 2, 3];
	db;
	
	constructor(db) {
		this.db = db;
	}
	
	saveToDb() {
		this.db.save(this.items);
	}
}
 
const list1 = new TodoList(new DBClass());
list1.saveToDb();

const list2 = new TodoList(new MongoDBClass());
list2.saveToDb();



































