'use strict';

function log(con) {
	console.log(con)
}


log(10 === 10.0); // true
log(0.1 + 0.2 === 0.3) // false
log(0.1 + 0.2) // 0.30000000000000004

log(Number('10')) // 10
log(+'10') // 10

log(Number.parseInt('11', 10)) // 11
log(Number.parseInt('11 sec', 10)) // 11
log(Number.parseInt('sec 11', 10)) // NaN

log(Number.parseFloat('11.5', 10)) // 11.5
log(Number.parseFloat('11.5 sec', 10)) // 11.5
log(Number.parseFloat('sec 11.5', 10)) // NaN

log(Number.isNaN(Number('10sdfs'))); // true
log(Number.isNaN(10 / 0)); // false
log(Number.isFinite(10 / 0)); // false
log(Number.isFinite(Number('10sdfs'))); // false
log(Number.isFinite(10)); // true

log(Number.isInteger(10)); // true
log(Number.isInteger(10.5)) // false;

