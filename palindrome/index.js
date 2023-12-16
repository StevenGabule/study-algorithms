function isPalindrome(str) {
  // const words = str.split('').reverse().join('');
  // return words === str;
  var strSet = '';
  for (let index = str.length - 1; index > -1; index--) {
    strSet += str[index];
  }
  return str === strSet;
}



console.log(isPalindrome('abba'));
console.log(isPalindrome('abba'));
