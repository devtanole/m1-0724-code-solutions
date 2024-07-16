'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('10 minutes in seconds:', convertMinutesToSeconds(10));
function greet(name) {
  return 'Hello' + ' ' + name + '!';
}
console.log('Example greeting:', greet('Devin'));
const getArea = (width, height) => width * height;
console.log(
  'Area of a rectangle with a width of 10 and a height of 24:',
  getArea(10, 24)
);
const dev = {
  firstName: 'Devin',
  lastName: 'Olesen',
};
const getFirstName = (person) => person.firstName;
console.log('firstName value of dev:', getFirstName(dev));
console.log(
  'one more firstName:',
  getFirstName({ firstName: 'James', lastName: 'Brown' })
);
const getLastElement = (array) => array[array.length - 1];
console.log(
  'last element of ["La", "Dolce", "Vita"]:',
  getLastElement(['La', 'Dolce', 'Vita'])
);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(
  'otherFunction calling to convert 2 minutes to seconds:',
  callOtherFunction(convertMinutesToSeconds, 2)
);
