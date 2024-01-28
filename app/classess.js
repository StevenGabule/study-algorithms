'use strict';

function log(arg) {
	console.log(arg)
}

class BookClass {
	isRead = false;
	
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
	
	read() {
		this.isRead = true;
	}
	
}

const lotr = new BookClass('lotr', 'Tolkien');
log(lotr)
log(lotr instanceof BookClass);
lotr.read();
log(lotr.__proto__)
log(lotr)

const task = {
	title: 'Task1',
	dueTo: new Date('2023/01/01'),
	
	get isOverdue() {
		return this.dueTo < new Date();
	},
	
	set isOverdue(isOverdueTask) {
		if(!isOverdueTask) {
			this.dueTo = new Date();
		}
	}
}

log(task.isOverdue)
task.isOverdue = false;
log(task);

class TaskClass {
	constructor(title, dueDate) {
		this.title = title;
		this.dueDate = dueDate;
	}
	get isOverDue() {
		return this.dueTo < new Date();
	}
	set dueDate(date) {
		if(date < new Date()) { return; }
		this._dueDate = date;
	}
}

const newTask = new TaskClass('Task2', new Date('2023/1/1'));
log(newTask);
log(newTask._dueDate = new Date());

class Test {
	static a = 1;
	static hello() {
		console.log('Hello')
	}
	static {
		let b = 5;
		this.a = 5;
	}
}

Test.hello();
log(Test.a);


class Car {
	#vin = 6;
	speed = 150;
	
	#changeVin() { console.log('changed'); }
	test() {
		this.#changeVin();
	}
	
	static #field = 3;
	
	static {
		this.#field = 5;
	}
	
}

const car = new Car();
log(car.speed);
car.test()

class UserClass {
	#login;
	#_password;
	
	constructor(login, password) {
		this.#login = login;
		this.#password = password;
	}
	
	set #password(pass) {
		this.#_password = pass.split('').reverse().join('');
	}
	
	get #password() {
		return this.#_password.split('').reverse().join('')
	}
	
	get login() {
		return this.#login
	}
	
	checkPassword(pass) { return this.#password === pass }
	
	changePassword(oldPass, newPass) {
		if(!this.checkPassword(oldPass)) {
			return false;
		}
		this.#password = newPass;
		return true;
	}
	
}

const user = new UserClass('a@a.ru', '123');
log(user.checkPassword('234'));
log(user.checkPassword('123'));
log(user.changePassword('123', '234'));
log(user)

const UserObject = {
	init(email, password) {
		this.email = email;
		this.password = password;
	},
	log() {
		console.log('Log')
	},
};

const userObj = Object.create(UserObject);
userObj.log();
userObj.init('b@b.com', '123');
log(userObj)

















