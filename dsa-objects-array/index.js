let anObject = { left: 1, right: 1 };
if ('left' in anObject) {
  console.log(anObject.left);
  delete anObject.left;
}

console.log(anObject.left);

console.log(Object.keys({ x: 0, y: 0, z: 2 }));
// → ["x", "y", "z"]

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
Object.assign(objectA, { d: 34, e: 77 });
Object.assign(objectA, {
  helloWorld: () => 'hello world',
  goodProgramming: 'JavaScript',
});
console.log(objectA);
console.log(objectA.helloWorld());
// → {a: 1, b: 3, c: 4}

let JOURNAL = [
  { events: ['carrot', 'exercise', 'weekend'], squirrel: false },
  { events: ['bread', 'pudding', 'brushed teeth', 'weekend', 'touched tree'], squirrel: false },
  { events: ['carrot', 'nachos', 'brushed teeth', 'cycling', 'weekend'], squirrel: false },
  { events: ['brussel sprouts', 'ice cream', 'brushed teeth', 'computer', 'weekend'], squirrel: false },
  { events: ['potatoes', 'candy', 'brushed teeth', 'exercise', 'weekend', 'dentist'], squirrel: false },
  { events: ['brussel sprouts', 'pudding', 'brushed teeth', 'running', 'weekend'], squirrel: false },
  { events: ['pizza', 'brushed teeth', 'computer', 'work', 'touched tree'], squirrel: false },
  { events: ['bread', 'beer', 'brushed teeth', 'cycling', 'work'], squirrel: false },
  { events: ['cauliflower', 'brushed teeth', 'work'], squirrel: false },
  { events: ['pizza', 'brushed teeth', 'cycling', 'work'], squirrel: false },
  { events: ['lasagna', 'nachos', 'brushed teeth', 'work'], squirrel: false },
  { events: ['brushed teeth', 'weekend', 'touched tree'], squirrel: false },
  { events: ['lettuce', 'brushed teeth', 'television', 'weekend'], squirrel: false },
  { events: ['spaghetti', 'brushed teeth', 'work'], squirrel: false },
  { events: ['brushed teeth', 'computer', 'work'], squirrel: false },
  { events: ['lettuce', 'nachos', 'brushed teeth', 'work'], squirrel: false },
  { events: ['carrot', 'brushed teeth', 'running', 'work'], squirrel: false },
  { events: ['brushed teeth', 'work'], squirrel: false },
  { events: ['cauliflower', 'reading', 'weekend'], squirrel: false },
  { events: ['bread', 'brushed teeth', 'weekend'], squirrel: false },
  { events: ['lasagna', 'brushed teeth', 'exercise', 'work'], squirrel: false },
  { events: ['spaghetti', 'brushed teeth', 'reading', 'work'], squirrel: false },
  { events: ['carrot', 'ice cream', 'brushed teeth', 'television', 'work'], squirrel: false },
  { events: ['spaghetti', 'nachos', 'work'], squirrel: false },
  { events: ['cauliflower', 'ice cream', 'brushed teeth', 'cycling', 'work'], squirrel: false },
  { events: ['spaghetti', 'peanuts', 'computer', 'weekend'], squirrel: true },
  { events: ['potatoes', 'ice cream', 'brushed teeth', 'computer', 'weekend'], squirrel: false },
  { events: ['potatoes', 'ice cream', 'brushed teeth', 'work'], squirrel: false },
  { events: ['peanuts', 'brushed teeth', 'running', 'work'], squirrel: false },
  { events: ['potatoes', 'exercise', 'work'], squirrel: false },
  { events: ['pizza', 'ice cream', 'computer', 'work'], squirrel: false },
  { events: ['lasagna', 'ice cream', 'work'], squirrel: false },
  { events: ['cauliflower', 'candy', 'reading', 'weekend'], squirrel: false },
  { events: ['lasagna', 'nachos', 'brushed teeth', 'running', 'weekend'], squirrel: false },
  { events: ['potatoes', 'brushed teeth', 'work'], squirrel: false },
  { events: ['carrot', 'work'], squirrel: false },
  { events: ['pizza', 'beer', 'work', 'dentist'], squirrel: false },
  { events: ['lasagna', 'pudding', 'cycling', 'work'], squirrel: false },
  { events: ['spaghetti', 'brushed teeth', 'reading', 'work'], squirrel: false },
  { events: ['spaghetti', 'pudding', 'television', 'weekend'], squirrel: false },
  { events: ['bread', 'brushed teeth', 'exercise', 'weekend'], squirrel: false },
  { events: ['lasagna', 'peanuts', 'work'], squirrel: true },
  { events: ['pizza', 'work'], squirrel: false },
  { events: ['potatoes', 'exercise', 'work'], squirrel: false },
  { events: ['brushed teeth', 'exercise', 'work'], squirrel: false },
  { events: ['spaghetti', 'brushed teeth', 'television', 'work'], squirrel: false },
  { events: ['pizza', 'cycling', 'weekend'], squirrel: false },
  { events: ['carrot', 'brushed teeth', 'weekend'], squirrel: false },
  { events: ['carrot', 'beer', 'brushed teeth', 'work'], squirrel: false },
  { events: ['pizza', 'peanuts', 'candy', 'work'], squirrel: true },
  { events: ['carrot', 'peanuts', 'brushed teeth', 'reading', 'work'], squirrel: false },
  { events: ['potatoes', 'peanuts', 'brushed teeth', 'work'], squirrel: false },
  { events: ['carrot', 'nachos', 'brushed teeth', 'exercise', 'work'], squirrel: false },
  { events: ['pizza', 'peanuts', 'brushed teeth', 'television', 'weekend'], squirrel: false },
  { events: ['lasagna', 'brushed teeth', 'cycling', 'weekend'], squirrel: false },
  { events: ['cauliflower', 'peanuts', 'brushed teeth', 'computer', 'work', 'touched tree'], squirrel: false },
  { events: ['lettuce', 'brushed teeth', 'television', 'work'], squirrel: false },
  { events: ['potatoes', 'brushed teeth', 'computer', 'work'], squirrel: false },
  { events: ['bread', 'candy', 'work'], squirrel: false },
  { events: ['potatoes', 'nachos', 'work'], squirrel: false },
  { events: ['carrot', 'pudding', 'brushed teeth', 'weekend'], squirrel: false },
  { events: ['carrot', 'brushed teeth', 'exercise', 'weekend', 'touched tree'], squirrel: false },
  { events: ['brussel sprouts', 'running', 'work'], squirrel: false },
  { events: ['brushed teeth', 'work'], squirrel: false },
  { events: ['lettuce', 'brushed teeth', 'running', 'work'], squirrel: false },
  { events: ['candy', 'brushed teeth', 'work'], squirrel: false },
  { events: ['brussel sprouts', 'brushed teeth', 'computer', 'work'], squirrel: false },
  { events: ['bread', 'brushed teeth', 'weekend'], squirrel: false },
  { events: ['cauliflower', 'brushed teeth', 'weekend'], squirrel: false },
  { events: ['spaghetti', 'candy', 'television', 'work', 'touched tree'], squirrel: false },
  { events: ['carrot', 'pudding', 'brushed teeth', 'work'], squirrel: false },
  { events: ['lettuce', 'brushed teeth', 'work'], squirrel: false },
  { events: ['carrot', 'ice cream', 'brushed teeth', 'cycling', 'work'], squirrel: false },
  { events: ['pizza', 'brushed teeth', 'work'], squirrel: false },
  { events: ['spaghetti', 'peanuts', 'exercise', 'weekend'], squirrel: true },
  { events: ['bread', 'beer', 'computer', 'weekend', 'touched tree'], squirrel: false },
  { events: ['brushed teeth', 'running', 'work'], squirrel: false },
  { events: ['lettuce', 'peanuts', 'brushed teeth', 'work', 'touched tree'], squirrel: false },
  { events: ['lasagna', 'brushed teeth', 'television', 'work'], squirrel: false },
  { events: ['cauliflower', 'brushed teeth', 'running', 'work'], squirrel: false },
  { events: ['carrot', 'brushed teeth', 'running', 'work'], squirrel: false },
  { events: ['carrot', 'reading', 'weekend'], squirrel: false },
  { events: ['carrot', 'peanuts', 'reading', 'weekend'], squirrel: true },
  { events: ['potatoes', 'brushed teeth', 'running', 'work'], squirrel: false },
  { events: ['lasagna', 'ice cream', 'work', 'touched tree'], squirrel: false },
  { events: ['cauliflower', 'peanuts', 'brushed teeth', 'cycling', 'work'], squirrel: false },
  { events: ['pizza', 'brushed teeth', 'running', 'work'], squirrel: false },
  { events: ['lettuce', 'brushed teeth', 'work'], squirrel: false },
  { events: ['bread', 'brushed teeth', 'television', 'weekend'], squirrel: false },
  { events: ['cauliflower', 'peanuts', 'brushed teeth', 'weekend'], squirrel: false },
];

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2); // → true
console.log(object1 == object3); // → false

object1.value = 15;
console.log(object2.value); // → 15
console.log(object3.value); // → 10

const score = { visitors: 0, home: 0 };
score.visitors = 1; // This is okay
// score = {visitors: 1, home: 1}; // This isn't allowed

const journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
			(table[2] + table[3]) * 
			(table[0] + table[1]) * 
			(table[1] + table[3]) * 
			(table[0] + table[2]));
}

function phiV2([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}

console.log(phi([76, 9, 4, 1])); // → 0.068599434

function tableFor(event, journal) {
	let table = [0, 0, 0, 0]
	for (let i = 0; i < journal.length; i++) {
		let entry = journal[i], index = 0;
		if(entry.events.includes(event)) index += 1;
		if(entry.squirrel) index +=2;
		table[index] += 1;
	}
	return table;
}

function journalEvents(journal) {
	let events = [];
	for(let entry of journal) {
		for(let event of entry.events) {
			if(!events.includes(event)) {
				events.push(event);
			}
		}
	}
	return events;
}

// const pizza = tableFor('pizza', JOURNAL);
// console.log('Pizza: ', phi(pizza));

// simpler way to write such loops in modern JavaScript.
// for (let entry of JOURNAL) {
// 	console.log(`${entry.events.length} events.`);
// }


for (let event of journalEvents(JOURNAL)) {
	let correlation = phi(tableFor(event, JOURNAL));
	if(correlation > 0.1 || correlation < -0.1) {
		console.log(event + " : ", correlation);
	}
}

for (const entry of JOURNAL) {
	if(entry.events.includes('peanuts') && 
	!entry.events.includes('brushed teeth')) {
		entry.events.push("peanut teeth");
	}
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));

let todoList = [];
function remember(task) {
	todoList.push(task);
}

function getTask() {
	return todoList.shift();
}

function rememberUrgently(task) {
	todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2)); // → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // → 3
// NOTE: Both indexOf and lastIndexOf take an optional second argument 
// that indicates where to start searching

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]

console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// → undefined

console.log("coconuts".slice(4, 7));
// → nut

console.log("coconut".indexOf("u"));
// → 5

console.log("coconut".indexOf("u") !== -1);
// true

console.log("one two three".indexOf("ee"));
// → 11

console.log(" okay \n ".trim());
// → okay

console.log(String(6).padStart(3, "0"));
// → 006

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]

console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

// Rest parameters
function max(...numbers) {
	let result = -Infinity;
	for (const number of numbers) {
		if(number > result) result = number;
	}
	return result;
}
// console.log(max(1, 4, 1, 9, 2)); // 9
const tn = [1, 4, 111, 94, 25]
console.log(max(...tn)); // 111

let wordss = ["never", "fully"];
console.log(["will", ...wordss, "understand"]);
// → ["will", "never", "fully", "understand"]

console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5

function randomPointOnCircle(radius) {
	let angle = Math.random() * 2 * Math.PI;
	return {
		x: radius * Math.cos(angle),
		y: radius * Math.sin(angle)
	}
}

console.log(randomPointOnCircle(2));
console.log(Math.random());
// → 0.36993729369714856 -> new pseudorandom number between zero (inclusive) and one (exclusive) every
// time you call it.

console.log(Math.floor(Math.random() * 10));
// → 2

let {namess} = {namess: "Faraji", age: 23};
console.log(namess);
// → Faraji


// JavaScript gives us the functions JSON.stringify and JSON.parse to convert
// data to and from this format. The first takes a JavaScript value and returns
// a JSON-encoded string. The second takes such a string and converts it to the
// value it encodes.
let string = JSON.stringify({squirrel: false, events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]