/***
* Return the number (count) of vowels in the given string.
* We will consider a, e, i, o, and u as vowels for this Kata.
* The input string will only consist of lower case letters and/or spaces.
***/

const getCount = (str) => {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if((/^[aeiou]/i).test(str[i])) vowelsCount++;
  }
  return vowelsCount;
}

const getCount1 = str => str.split('').filter((v) => (/^[aeiou]/i).test(v)).length
const getCount2 = str => (str.match(/[aeiou]/ig) || []).length

console.log(getCount("abracadabraeiueo"));
console.log(getCount1("abracadabraeiueo"));
console.log(getCount2(""));

