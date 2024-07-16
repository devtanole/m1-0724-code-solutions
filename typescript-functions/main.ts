function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('10 minutes in seconds:', convertMinutesToSeconds(10));

function greet(name: string): string {
  return 'Hello' + ' ' + name + '!';
}
console.log('Example greeting:', greet('Devin'));

const getArea = (width: number, height: number): number => width * height;
console.log(
  'Area of a rectangle with a width of 10 and a height of 24:',
  getArea(10, 24)
);

interface person {
  firstName: string;
  lastName: string;
}
const dev: person = {
  firstName: 'Devin',
  lastName: 'Olesen',
};
const getFirstName = (person: person): string => person.firstName;
console.log('firstName value of dev:', getFirstName(dev));
console.log(
  'one more firstName:',
  getFirstName({ firstName: 'James', lastName: 'Brown' })
);

const getLastElement = (array: any[]): any => array[array.length - 1];
console.log(
  'last element of ["La", "Dolce", "Vita"]:',
  getLastElement(['La', 'Dolce', 'Vita'])
);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
console.log(
  'otherFunction calling to convert 2 minutes to seconds:',
  callOtherFunction(convertMinutesToSeconds, 2)
);
