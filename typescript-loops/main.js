'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
// getNumbersToTen
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen:', getNumbersToTen());
// getNumbersToTwenty
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty:', getEvenNumbersToTwenty());
// repeatWord
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  if (times === 0) {
    return '';
  }
  while (count < times) {
    count += 1;
    repeated += word;
  }
  return repeated;
}
console.log('repeatWord("repeat", 22)', repeatWord('repeat', 23));
// logEachCharacter
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
console.log(logEachCharacter('Devin'));
// doubleAll
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    const twoTime = numbers[i] * 2;
    doubled.push(twoTime);
  }
  return doubled;
}
console.log('doubleAll [1, 2, 4, 7]:', doubleAll([1, 2, 4, 7]));
// getKeys
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log(
  'getKeys:{firstName: Rick, lastName: Blaine, age: 33}',
  getKeys({ firstName: 'Rick', lastName: 'Blaine', age: 33 })
);
// getValues
function getValues(obj) {
  const valuesArr = [];
  for (const key in obj) {
    valuesArr.push(obj[key]);
  }
  return valuesArr;
}
