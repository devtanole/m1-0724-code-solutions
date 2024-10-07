const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenArr = numbers.filter((number) => number % 2 === 0);
console.log(evenArr);

const noDs = names.filter((name) => !name.includes('D') && !name.includes('d'));
console.log(noDs);
