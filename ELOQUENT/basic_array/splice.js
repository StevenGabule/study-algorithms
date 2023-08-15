const months = ['Jan', 'March', 'Apr', 'June'];
const removeMt = months.splice(1,2,'feb');
// console.log(months);
// console.log(removeMt);

// months.splice(4,0,'May')
// console.log(months);

const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const removed = myFish.splice(2,0,'drum', 'guitar');
console.log(myFish);
console.log(removed);

const newRemoved = myFish.splice(3,1);
console.log(newRemoved);
