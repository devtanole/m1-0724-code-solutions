// math
const heroes: any[] = ['Batman', 'Spiderman', 'Devinman', 'Morpheus'];
const random: number = Math.random();
const randomNumber: number = heroes.length * random;
const randomIndex: number = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero: string = heroes[randomIndex];
console.log('randomHero:', randomHero);

// array
const library: any[] = [
  { title: 'Circe', author: 'Madeline Miller' },
  {
    title: 'The Stranger',
    author: 'Albert Camus',
  },
  { title: 'The Book of Disquiet', author: 'Fernando Pessoa' },
];
const lastBook: string = library.pop();
console.log('lastBook:', lastBook);
const firstBook: string = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

// string
const fullName: string = 'Devin Olesen';
const firstAndLastName: string[] = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

// object
const employee: object = { name: 'Devin', age: 22, position: 'Cook' };
const employeeKeys: string[] = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues: any[] = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs: any[] = Object.entries(employee);
console.log('employeePairs:', employeePairs);
