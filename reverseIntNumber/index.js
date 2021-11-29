function revNumberInt(num) {
  return parseInt(String(num).split('').reverse().join('')) * Math.sign(num);
}

console.log(revNumberInt(51));
console.log(revNumberInt(981));
console.log(revNumberInt(500));
console.log(revNumberInt(-15));
console.log(revNumberInt(-90));
