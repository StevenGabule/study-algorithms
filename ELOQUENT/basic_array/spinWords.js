const spinWords = (words) => {
  let currentWords = words.split(' ');
  let array_words = []
  for (let i = 0; i < currentWords.length; i++) {
    if(currentWords[i].length >= 5) {
      let rev = currentWords[i].split('').reverse();
      array_words.push(rev.join(''))
    } else {
      array_words.push(currentWords[i])
    }
  }
  return array_words.join(' ');
}

// alternate solution part 1
const spinWords1 = (str) => [...str.split(' ')].map((v) => v.length >= 5 ? v.split("").reverse().join('') : v).join(' ')

// alternate solution part 2
const spinWords2 = (str) => str.replace(/\w{5,}/g, w => w.split('').reverse().join(''))

console.log(spinWords("Hey! Welcome world")); // Hey! emocleW dlrow
console.log(spinWords1("Hey! Welcome world")); // Hey! emocleW dlrow
console.log(spinWords2("Hey! Welcome world")); // Hey! emocleW dlrow

