//task2

var numJewelsInStones = function (jewels, stones) {
  var count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i].includes(stones[j])) {
        count++;
      }
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb")); //3
console.log(numJewelsInStones("x", "XX")); // 0

//task3
const isValid = function (s) {
  const frchxilebi = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const arr = [];

  for (let a = 0; a < s.length; a++) {
    if (frchxilebi[s[a]]) {
      arr.push(frchxilebi[s[a]]);
    } else if (arr.pop() !== s[a]) {
      return false;
    }
  }

  return arr.length === 0;
};
console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
