/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// getNumbersToTen
function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber: number = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen:', getNumbersToTen());

// getNumbersToTwenty
function getEvenNumbersToTwenty(): number[] {
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
function repeatWord(word: string, times: number): any {
  let count: number = 1;
  let repeated: string = '';
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
function logEachCharacter(str: string): any {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
console.log(logEachCharacter('Devin'));

// doubleAll
function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    const twoTime = numbers[i] * 2;
    doubled.push(twoTime);
  }
  return doubled;
}
console.log('doubleAll [1, 2, 4, 7]:', doubleAll([1, 2, 4, 7]));

// getKeys
function getKeys(obj: Record<string, unknown>): string[] {
  const keys: string[] = [];
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
function getValues(obj: Record<string, unknown>): any {
  const values: string[] = [];
  for (const value in obj) {
    values.push(value);
  }
  return values;
}
