'use strict';

 function log(con) {
	console.log(con)
 }
 
log(Math.sqrt(36));
log(16 ** (1/2));
log(Math.cbrt(27));
log(Math.cbrt(36));
log(16 ** (1/4));
	
log(Math.sign(-100));
log(Math.sign(35));
	
log(Math.abs(-100));
log(Math.abs(35));

log(Math.exp(3));

const arr = [1,-2,10,0,19];
log(Math.max(...arr));

log(Math.round(1.4)) // 1
log(Math.round(1.5)) // 2
log(Math.round(1.6)) // 2

log(Math.ceil(1.1)) // 2
log(Math.ceil(1)) // 1
log(Math.ceil(0.1)) // 1

log(Math.floor(0.1)) // 0
log(Math.floor(2.9)) // 2

log(Math.trunc(2.9)) // 2
log(Math.trunc(2.1)) // 2
log(Math.trunc(1.1111)) // 1

log(1.49999.toFixed(1))
log(Number(1.49999).toFixed(1))

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

log(random(1, 255)); // from 1 to 255 random numbers generation

log(15 / 2)
log(15 % 2)
log(14 % 2)

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;

function isEvenFunc(n) {
	return n % 2 === 0;
}

log(isEven(17)) // f 
log(isEven(12)) // t
log(isOdd(17)) // t
log(isOdd(12)) // f
  
const bigNum1 = 350_500_000; 
const bigNum2 = 350500000;

const payment = 20_10;
const paymentInR = 20.10;
const paymentInR2 = 2_0.1_0;

log(Number('350_500_000'))
log(Number('350500000'))
log(Number.parseInt('350_500_000'))
log(Number.parseFloat('350_500_000.00'))


const options1 = {
	style: 'currency',
	currency: 'RUB',
	useGrouping: false
}

const options2 = {
	style: 'currency',
	currency: 'USD'
}

const options3 = {
	style: 'decimal'
}

const options4 = {
	style: 'percent'
}

const options5 = {
	style: 'unit',
	unit: 'celsius'
}

log(new Intl.NumberFormat('ru-RU', options1).format(23000))
log(new Intl.NumberFormat('en-US', options2).format(23000))
log(new Intl.NumberFormat('ru-RU', options3).format(10000))
log(new Intl.NumberFormat('ru-RU', options4).format(0.1))
log(new Intl.NumberFormat('ru-RU', options5).format(25))


// ** Currency Converter
function convert(sum, initialCurrency, convertCurrency) {
	const allCurrencies = [
		{ name: 'USD', mult: 1 },
		{ name: 'RUB', mult: 1/60 },
		{ name: 'EUR', mult: 1.1 },
	];
	const initial = allCurrencies.find(c => c.name === initialCurrency);
	if(!initial) {
		return null;
	}
	const convert = allCurrencies.find(c => c.name === convertCurrency);
	if(!convert) {
		return null;
	}
	return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: convert.name })
	.format(sum * initial.mult / convert.mult);
}

log(convert(10000, 'RUB', 'USD'));
log(convert(10000, 'RUB', 'EUR'));
log(convert(100, 'USD', 'RUB'));
log(convert(100, 'USD', 'EUR'));
log(convert(100, 'EUR', 'RUB'));
log(convert(100, 'EUR', 'USD'));
log(convert(100, 'TG', 'USD'));
log(convert(100, 'EUR', 'TG'));
	