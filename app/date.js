'use strict';

function log(load) {
	console.log(load)
}

const now = new Date();
log(now); // Sun Jan 28 2024 16:29:00 GMT+0800 (Singapore Standard Time)

log(new Date('02-01-2023')) // Wed Feb 01 2023 00:00:00 GMT+0800 (Singapore Standard Time)
log(new Date('02/01/2023')) // Wed Feb 01 2023 00:00:00 GMT+0800 (Singapore Standard Time)
log(new Date('2023/01/02')) // Mon Jan 02 2023 00:00:00 GMT+0800 (Singapore Standard Time)
log(new Date('10 Jan 2023')) // Tue Jan 10 2023 00:00:00 GMT+0800 (Singapore Standard Time)
log(new Date('Dec 22 2022 20:40:03')) // Thu Dec 22 2022 20:40:03 GMT+0800 (Singapore Standard Time)

log(new Date(2024, 11, 13, 10, 5, 10)) // Fri Dec 13 2024 10:05:10 GMT+0800 (Singapore Standard Time)
log(new Date(2024, 12, 10 + 100)) // Sun Apr 20 2025 00:00:00 GMT+0800 (Singapore Standard Time)
log(new Date(0)) // Thu Jan 01 1970 07:30:00 GMT+0730 (Singapore Standard Time)
log(Date.now()) // 1706430874594
log(new Date(Date.now())) // Sun Jan 28 2024 16:34:34 GMT+0800 (Singapore Standard Time)

log(now.getFullYear()) 	// 2024
log(now.getMonth()) 		// 0
log(now.getDate()) 			// 28
log(now.getDay()) 			// 0
log(now.getHours()) 		// 16
log(now.getMinutes()) 	// 34
log(now.getTime()) 			// 1706430874591

log(new Date(now.setFullYear(2030))); // Mon Jan 28 2030 16:34:34 GMT+0800 (Singapore Standard Time)

log(new Date(now.setMonth(10))); // Thu Nov 28 2030 16:34:34 GMT+0800 (Singapore Standard Time)


const date1 = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);
log(Number(date1)) // 1731600000000
log(date2 - date1) // 2592000000

function getDaysBetweenDates(dateFirst, dateSecond) {
	return (date2 - date1) / (1000 * 60 * 60 * 24);
}

log(getDaysBetweenDates(date1, date2)) // 30

log('DATE COMPARISON --------------------------------------------------------------');
const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 4);

log(first < second); //false
log(first == second) // f
log(first === second) // f

log(first.getTime() == second.getTime()) // t
log(first.getTime() === second.getTime()) // t
log(Number(first) === Number(second)) // t
log(+first === +second) // t

const user1 = { name: 'Mike', birthday: '01/28/2024' }

function isBirthday(user) {
	const birthdayDate = new Date(user.birthday);
	const now = new Date();
	if(birthdayDate.getMonth() !== now.getMonth()) { return false  }
	if(birthdayDate.getDate() !== now.getDate()) { return false  }
	return true;
}

log(isBirthday(user1)) // true


log('INTERNATIONALIZATION OF DATES -------------------------------------------');

const newDate = new Date();
log(new Intl.DateTimeFormat('ru-RU').format(newDate)); // 28.01.2024
log(new Intl.DateTimeFormat('en-US').format(newDate)); // 1/28/2024

const newOptions1 = {
	hour: 'numeric',
	minute: 'numeric',
}
log(new Intl.DateTimeFormat('ru-RU', newOptions1).format(newDate)); // 17:13
log(new Intl.DateTimeFormat('en-US', newOptions1).format(newDate)); // 5:13 PM

const newOptions2 = {
	hour: 'numeric',
	minute: 'numeric',
	month: 'long',
	weekday: 'short', 
	year: '2-digit',
}

log(new Intl.DateTimeFormat('ru-RU', newOptions2).format(newDate)); // январь 24 г. вс в 17:15
log(new Intl.DateTimeFormat('en-US', newOptions2).format(newDate)); // January 24 Sun at 5:15 PM

log(navigator.language); // en-US
log(new Intl.DateTimeFormat(navigator.language, newOptions1).format(newDate)); // 5:17 PM

 