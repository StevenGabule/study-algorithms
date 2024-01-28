'use strict';

 function log(con) {
	console.log(con)
 }
 
 const a = [1,2];
 // console.dir(a)
 
 
 const User = function(email, password) {
	 this.email = email;
	 this.password = password;
 }
 
 const user1 = new User('soeone@gmail.com', '1234')
 log(user1);
 
 const user2 = new User('soeones@gmail.com', '1234')
 log(user2);
 log(user2 instanceof User);
 log(user1 instanceof User);
 
 const Book = function(title, author) {
	 this.author = author;
	 this.title = title;
	 this.isRead = false;
 }
 
 Book.prototype.read = function() {
	 this.isRead = true;
 }
 
 Book.prototype.cover = 'Paper';
 
 const lordOfTheRing = new Book('Lord of the ring', 'Tolkien');
 lordOfTheRing.read();
 
 log(lordOfTheRing)
 log(lordOfTheRing.cover)
 log(lordOfTheRing.hasOwnProperty('cover'));
 log(lordOfTheRing.hasOwnProperty('author'));
 
 log(lordOfTheRing.__proto__)
 log(lordOfTheRing.__proto__ === Book.prototype)
 log(Book.prototype.isPrototypeOf(lordOfTheRing))
 log(Book.prototype.isPrototypeOf(Book))
 
 log('EXERCISE - SHOPPING CART --------------------------');
 const product = {id: 1, name: 'Bread', count: 1};
 
 const Cart = function() {
	 this.products = [];
 }
 
 Cart.prototype.addProduct = function(product) {
	 if(this.products.find(product => product.id === product.id)) {
		return;		 
	 }
	this.products.push(product)
 }
 
 Cart.prototype.increaseAmount = function(id) {
	 this.products = this.products.map(product => {
		 if(product.id == id) {
			 product.count++;
			 return product;
		 }
		 return product;
	 })
 }
 
 Cart.prototype.decreaseAmount = function(id) {
	 this.products = this.products.map(product => {
		 if(product.id == id) {
			 product.count--;
			 return product;
		 }
		 return product;
	 }).filter(product => product.count > 0)
 }
 
 const cart = new Cart();
 cart.addProduct(product)
 cart.increaseAmount(1);
 cart.increaseAmount(1);
 cart.increaseAmount(1);
 cart.decreaseAmount(1);
 cart.decreaseAmount(1);
 cart.decreaseAmount(1);
 cart.decreaseAmount(1);
 log(cart)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 