const isPangram = words => {
  let mark = {};
  let des = true;
  let letters = words.split('').filter(v => v !== ' ').filter(d => String(d) !== '.')
  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for(let i = 0; i < letters.length; i++) {
    des = alpha.indexOf(letters[i].toLowerCase()) !== -1;
    mark[letters[i]] = des;
  }

  for (let i = 0; i < alpha.length; i++) {
    if(mark[alpha[i]] === false || mark[alpha[i]] === undefined) return false;
  }

  return true;
}

console.log(isPangram("the quick brown fox jumps over the lazy dog."));
console.log(isPangram("this is not a pangram."));
