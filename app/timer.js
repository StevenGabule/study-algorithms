'use strict';

 function log(con) {
	console.log(con)
 }
 
log(1)

const messages = ['Bash!', 'Boom!'];

// const boomTimer = setTimeout((m1, m2) => {
// 	log(2)
// 	log(m1)
// 	log(m2)
// }, 1000, ...messages);

// log(3)

// ** Precision timers
// const mark1 = performance.now();

// setTimeout(() => {
	// const mark2 = performance.now();
	// log(mark2 - mark1)
// }, 1000);

// const interval = setInterval(() => {
	// log(new Date());
// }, 1000)

// const timer = setTimeout((m1) => {
	// clearInterval(interval);
	// log(m1)
// }, 5000, 'done')

// log(interval)
// log(timer)

function pizzaTimer(ms) {
	const end = new Date().getTime() + ms;
	
	const interval = setInterval(() => {
		log(new Intl.DateTimeFormat('en-US', { minute: 'numeric', second: 'numeric' }).format(end + 100 - new Date()))
	}, 1000); 
	
	setTimeout(() => {
		clearInterval(interval);
		console.log('🍕!!!')
	}, ms)
}

pizzaTimer(5000)








