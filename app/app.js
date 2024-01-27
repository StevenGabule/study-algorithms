'use strict';
// ** SET LESSONS
// const arrayUsers = ['Any', 'Maria', 'Pavel'];
// console.log(arrayUsers);

// const flights = ['Russia', 'USA', 'China', 'London', 'Europe', 'Japan', 'USA', 'Russia'];

// console.log(flights); // ['Russia', 'USA', 'China', 'London', 'Europe', 'Japan', 'USA', 'Russia']
// const setFlights = new Set(flights);
// console.log(setFlights); // return unique values
// console.log(typeof setFlights); // return object
// console.log(setFlights.size); // count the object size
// console.log(setFlights.has('Russia')); // return true
// setFlights.add('Paris')
// setFlights.delete('London')
// // setFlights.clear(); // remove all the objects

// for(const flight of setFlights) {
// 	console.log(flight);
// }

// console.log([...setFlights]); // (6) ['Russia', 'USA', 'China', 'Europe', 'Japan', 'Paris']

// const setObj = new Set([{a: 1}, {b: 1}, {b: 2}]); 
// console.log(setObj); // Set(3) {{…}, {…}, {…}}

// console.log(new Set('abcd')); // return Set {'a', 'b',...}


// ** MAP LESSONS
const weatherMap = new Map();
weatherMap.set('London', '10').set('Moscow', '7');

console.log(weatherMap.get('Moscow')) // 7
console.log(weatherMap.get('not found')) // undefined

console.log(weatherMap.has('Moscow')) // true
console.log(weatherMap.has('not found')) // false
console.log(weatherMap.delete('London')) // true

// weatherMap.clear();

const arr = [1,2,3];
const obj = {a : 1}
weatherMap
	.set(1, 5)
	.set(true, 'yes')
	.set(false, 'no')
	.set([1,2,3], 'array')
	.set(arr, 'array')
	.set({a : 1}, {a : 1});

console.log(weatherMap) // Map of objects
console.log(weatherMap.size) // 6
console.log(weatherMap.get([1,2,3])) // undefined
console.log(weatherMap.get(arr)) // array
console.log(weatherMap.get(obj)) // array


console.log('-----------------------------------------------------------------')

const wetherMapOne = new Map([
	['London', '10'],
	['Moscow', '7'],
]);
console.log(wetherMapOne);

const wetherMapOneObject = {
	london: 10,
	moscow: 7,
	paris: 14
}

console.log(Object.entries(wetherMapOneObject));
const wetherMapTwo = new Map(Object.entries(Object.entries(wetherMapOneObject)));
console.log(wetherMapTwo);
console.log(wetherMapTwo.size);

console.log('-----------------------------------------------------------------')

const weatherMapThree = new Map([
	['London', 10],
	['Moscow', 7],
	['Paris', 14],
])

for(const [key, value] of weatherMapThree) {
	console.log(key, value);
	// London 10
	// Moscow 7
	// Paris 14
}

console.log([...weatherMapThree]); // [Array(2), Array(2), Array(2)]
console.log([...weatherMapThree.keys()]); // ['London', 'Moscow', 'Paris']
console.log([...weatherMapThree.values()]); // [10, 7, 14]

// revert the given 2 dimensional array to value -> key
const WeatherMapThree = new Map([...weatherMapThree].map(el => el.reverse()))
console.log(WeatherMapThree); // {10 => 'London', 7 => 'Moscow', 14 => 'Paris'}

console.log('-----------------------------------------------------------------')

// ** WeakMap
let a = { a : 1};
let b = { b : 1};
let c = { c : 1};

const wm = new WeakMap();
wm.set(a, 'TestA');
wm.set(b, 'TestB');
console.log(wm.get(a));
console.log(wm.get(b));

console.log(wm.has(a));
console.log(wm.has(b));

a = null;
setTimeout(() => {
	console.log(wm);
}, 1000);

let cache = new WeakMap();

function getValue(obj) {
	if(!cache.has(obj)) {
		const res = 1;
		cache.set(obj, res);
	}
	return cache.get(obj);
}

const res = getValue(b);
console.log(res);

const res2 = getValue(b);
console.log(res2);





