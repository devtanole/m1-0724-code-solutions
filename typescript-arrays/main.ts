const colors: string[] = ['red', 'white', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

const colorLiteral: string = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(colorLiteral);
colors[2] = 'green';
const colorLiteral2: string = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(colorLiteral2);

console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);

const students: string[] = ['Jesse', 'Celine', 'Rick', 'Ilsa'];
const numberOfStudents: number = students.length;
console.log('There are', students.length, 'students in the class.');

const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];
console.log('The last student in the array is', lastStudent, '.');
console.log('value of students:', students);
console.log('typeof students:', typeof students);
