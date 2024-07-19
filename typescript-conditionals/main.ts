/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number: number): any {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number: number): any {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string: string): any {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

interface person {
  name: string;
  age: number;
}
function isOldEnoughToDrink(person: person): any {
  if (person.age < 21) {
    return false;
  } else {
    return true;
  }
}

function isOldEnoughToDrive(person: person): any {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person: person): any {
  if (person.age && person.name) {
    return false;
  }
}

function categorizeAcidity(pH: number): any {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): any {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre: string): any {
  switch (genre) {
    case 'action':
      return 'Mad Max: Fury Road';
    case 'comedy':
      return 'Hot Fuzz';
    case 'horror':
      return 'Hereditary';
    case 'drama':
      return 'Before Sunrise';
    case 'musical':
      return 'The Umbrellas of Cherbourg';
    case 'sci-fi':
      return 'Ex Machina';
  }
}
