// @ts-check

// METHODS

function speak(line) {
  console.log("The " + this.type + " rabbit says " + line)
}

var whiteRabbit = {type: "White", speak: speak}
var fatRabbit = {type: "Fat", speak: speak}

whiteRabbit.speak('On my ears and whickers how late it\'s getting!')
// � The white rabbit says 'Oh my ears and whiskers, how late it's getting!'

fatRabbit.speak(`I could sure use carrot right now!`)
// � The fat rabbit says 'I could sure use a carrot  right now.'

// alternate
speak.apply(fatRabbit, ['burp!'])
speak.call({type: 'old'}, 'Oh my!')


// PROTOTYPES
console.log(Object.getPrototypeOf({}) == Object.prototype) // true
console.log(Object.getPrototypeOf(Object.prototype)); // null
console.log(Object.getPrototypeOf(isNaN) == Function.prototype) // true
console.log(Object.getPrototypeOf([]) == Array.prototype) // true

// The Object.getPrototypeOf function obviously returns the prototype of an object.
var protoRabbit = {
  speak: function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

var killerRabbit = Object.create(protoRabbit)
killerRabbit.type = "Killer";
killerRabbit.speak("SKREEEE!"); // The killer rabbit says 'SKREEEE'


// CONSTRUCTORS
// convenient way to create objects that derive from some shared prototype

function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("Killer")
var blackRabbit = new Rabbit("Black")
console.log(blackRabbit.type) // black

Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}

blackRabbit.speak("Doom..."); // The black rabbit says 'Doom...'

// Overriding Derived Properties
Rabbit.prototype.teeth = 'small'
console.log(killerRabbit.teeth) // small
killerRabbit.teeth = 'long, sharp and bloody'
console.log(killerRabbit.teeth); // long, sharp and bloody
console.log(blackRabbit.teeth); // small
console.log(Rabbit.prototype.teeth); // small
console.log(Array.prototype.toString == Object.prototype.toString) // false
console.log([1,2].toString()) // 1,2
console.log(Object.prototype.toString.call([1,2])); // [object Array]

// PROTOTYPE INTERFERENCE
Object.defineProperty(Object.prototype, "hiddenNonsense", { enumerable: false, value: "Hi"})
for( var name1 in map) {
  if(map.hasOwnProperty(name1)) {
    console.log(name1);
  }
}

console.log(map.hiddenNonsense); // hi

// Prototype-less Objects
var mapOne = Object.create(null)
map['pizza'] = 0.069;
console.log('toString' in map) // false
console.log('pizza' in map) //  true

// Polymorphism















