let re1 = new RegExp("abc");
let re2 = /abc/;

// Some characters, such as
// question marks and plus signs, have special meanings in regular expressions and
// must be preceded by a backslash if they are meant to represent the character
// itself.
let eighteenPlus = /eighteen\+/;

// ** Testing for matches
console.log(/abc/.test("abcde"));
// → true

console.log(/abc/.test("abxde"));
// → false

// ** Sets of characters
console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true

// A number of common character groups have their own built-in shortcuts.
// Digits are one of them: \d means the same thing as [0-9].
// \d Any digit character
// \w An alphanumeric character (“word character”)
// \s Any whitespace character (space, tab, newline, and similar)
// \D A character that is not a digit
// \W A nonalphanumeric character
// \S A nonwhitespace character
// . Any character except for newline

// So you could match a date and time format like 01-30-2003 15:20 with the
// following expression:
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true

console.log(dateTime.test("30-jan-2003 15:20"));
// → false

// To invert a set of characters—that is, to express that you want to match any
// character except the ones in the set—you can write a caret (^) character after
// the opening bracket.
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true

// ** Repeating parts of a pattern
console.log(/'\d+'/.test("'123'"));
// → true

console.log(/'\d+'/.test("''"));
// → false

console.log(/'\d*'/.test("'123'"));
// → true

console.log(/'\d*'/.test("''"));
// → true

// The star (*) has a similar meaning but also allows the pattern to match zero
// times.

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true

console.log(neighbor.test("neighbor"));
// → true

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true

// You can also specify open-ended ranges when using braces by omitting the
// number after the comma. So, {5,} means five or more times.

// ** Grouping subexpressions
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true

// i at the end of the expression in the example makes this regular expression
// case insensitive

// ** Matches and groups
let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8

console.log("one two 100".match(/\d+/));
// → ["100"]

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]

console.log(/bad(ly)?/.exec("bad"));
// → ["bad", undefined]
console.log(/(\d)+/.exec("123"));
// → ["123", "3"]

// The Date class
console.log(new Date());
// → Mon Nov 13 2017 16:19:11 GMT+0100 (CET)

console.log(new Date(2009, 11, 9));
// → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)

console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)

function getDate(string) {
	let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
	return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)


// The caret matches the start of the input string, whereas
// the dollar sign matches the end.
// /^\d+$/ matches a string consisting entirely of one or more digits,
// /^!/ matches any string that starts with an exclamation mark
// /x^/ does not match any string (there cannot be an x before the start of the string).

console.log(/cat/.test("concatenate"));
// → true

console.log(/\bcat\b/.test("concatenate"));
// → false

// ** Choice patterns
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pigchickens"));
// → false

// ** The mechanics of matching

// -- NO CODE MORE ON EXPLAINING

// ** The replace method
console.log("papa".replace("p", "m"));
// → mapa

console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar

console.log(
"Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
.replace(/(\w+), (\w+)/g, "$2 $1"));
// → Barbara Liskov
// → John McCarthy
// → Philip Wadler

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,
str => str.toUpperCase()));
// → the CIA and FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";

function minusOne(match, amount, unit) {
	amount = Number(amount) - 1;
	if (amount == 1) { // only one left, remove the 's'
		unit = unit.slice(0, unit.length - 1);
	} else if (amount == 0) {
		amount = "no";
	}
	return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs


// ** Greed
// It is possible to use replace to write a function that removes all comments
// from a piece of JavaScript code. Here is a first attempt:
function stripComments(code) {
	return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// → 1 + 3
console.log(stripComments("x = 10;// ten!"));
// → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1 1

// repetition operators (+, *, ?, and {}) are greedy -> meaning they match as much as // they can and backtrack from there

// question mark after them (+?, *?, ??, {}?), they become
// nongreedy and start by matching as little as possible, matching more only when
// the remaining pattern does not fit the smaller match.

function stripComments(code) {
	return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1 + 1


// ** Dynamically creating RegExp objects
let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
// → _Harry_ is a suspicious character.

let name = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));
// → This _dea+hl[]rd_ guy is super annoying.

// ** The search method
console.log(" word".search(/\S/));
// → 2
console.log(" ".search(/\S/));
// → -1

// ** The lastIndex property
let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
// → 4
console.log(pattern.lastIndex);
// → 5

let global = /abc/g;
console.log(global.exec("xyz abc"));
// → ["abc"]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));
// → null

console.log("Banana".match(/an/g));
// → ["an", "an"]

// ** Looping over matches
let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let match;

while (match = number.exec(input)) {
	console.log("Found", match[0], "at", match.index);
}
// → Found 3 at 14
// → Found 42 at 33
// → Found 88 at 40

// ** Parsing an INI file

// The configuration file looks like this:
// searchengine=https://duckduckgo.com/?q=$1
// spitefulness=9.7

// ; comments are preceded by a semicolon...
// ; each section concerns an individual enemy
// [larry]
// fullname=Larry Doe
// type=kindergarten bully
// website=http://www.geocities.com/CapeCanaveral/11451

// [davaeorn]
// fullname=Davaeorn
// type=evil wizard
// outputdir=/home/marijn/enemies/davaeorn



function parseINI(string) {
	// Start with an object to hold the top-level fields
	let result = {};
	let section = result;
	string.split(/\r?\n/).forEach(line => {
		let match;
		if (match = line.match(/^(\w+)=(.*)$/)) {
			section[match[1]] = match[2];
		} else if (match = line.match(/^\[(.*)\]$/)) {
			section = result[match[1]] = {};
		} else if (!/^\s*(;.*)?$/.test(line)) {
			throw new Error("Line '" + line + "' is not valid.");
		}
	});
	return result;
}
console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
// → {name: "Vasilis", address: {city: "Tessaloniki"}}













