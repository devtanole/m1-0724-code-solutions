'use strict';
const student = {
  firstName: 'Devin',
  lastName: 'Olesen',
  age: 22,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'cook';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);
const car = {
  make: 'Chevrolet',
  model: 'Impala',
  year: 2009,
};
car['color'] = 'silver';
car['isConvertible'] = false;
console.log('value of car["color"]:', car['color']);
console.log('value of car["isConvertible"]:', car['isConvertible']);
console.log('value of car:', car);
console.log('typeof car:', typeof car);
const pet = {
  name: 'Coco',
  kind: 'Dog',
};
delete pet.name;
delete pet['kind'];
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
