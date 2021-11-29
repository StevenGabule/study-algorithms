function maxChar(str) {
  const hashMap = {};
  let max = 0;
  let maxChar = '';
  for (let i = 0; i < str.length; i++) {
    hashMap[str[i]] = hashMap[str[i]] + 1 || 1;
  }

  for (let char in hashMap) {
    if (hashMap[char] > max) {
      maxChar = char;
      max = hashMap[char];
    }
  }
  console.log(maxChar);
}

maxChar('Hello There!');
