let rabbit = {
  speak(line) {
    console.log(`The rabbit say ${line}`);
  }
}

rabbit.speak(2);

function speak(line) {
  console.log(`The ${this.type} rabbits ${line}`);
}

let whiteR = { type: 'white', speak };
let redR = { type: 'red', speak };

redR.speak('monster');
whiteR.speak('cold');

function normalize() {
  console.log(this.coords.map(n => n / this.length));
}

normalize.call({ coords: [0, 2, 3], length: 5 });

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'Killer'
killerRabbit.speak('SKREEEE!')


// creating a class
function makeRabbit(typ) {
  let rabbit = Object.create(protoRabbit)
  rabbit.type = type;
  return rabbit;
}

function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says ${line}`)
}

let weirdRabbit = new Rabbit('weird')
weirdRabbit.speak('awesome')

let object = new class { getWord() { return "Hello world" } }
console.log(object.getWord());

let ages = new Map();
ages.set('mike', 29);
ages.set('john', 29);
ages.set('doe', 29);
ages.set('awesome', 25);

console.log(ages.get('awesome'))
console.log(ages.has('awesome1'))

const toStringSymbol = Symbol('toString')
Array.prototype[toStringSymbol] = function () { return `${this.length} cm of blue yarn` }

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

// matrix class, acting as a two-dimensional array.
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }

  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  next() {
    if (this.y == this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y)
    };

    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false }
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let { x, y, value } of matrix) {
  console.log(x, y, value)
}

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100)
  }
};

console.log(varyingSize.size);
console.log(varyingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}


let temp = new Temperature(22);
console.log(temp.fahrenheit); // → 71.6

temp.fahrenheit = 86;
console.log(temp.celsius);  // → 30

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x,y) => undefined) {
    super(size, size, (x,y) => {
      if(x < y) return element(y,x);
      else return element(x,y)
    });
  }
  set(x,y,value) {
    super.set(x,y, value)
    if(x != y) {
      super.set(y,x, value)
    }
  }
}

let matrix1 = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`)
console.log(matrix1.get(2,3)); // 3,2