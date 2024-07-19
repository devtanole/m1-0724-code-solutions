'use strict';
//math
const heroes = ['Batman', 'Spiderman', 'Devinman', 'Morpheus'];
let random = Math.random();
let randomNumber = heroes.length * random;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);
//array
const library = [
  { title: 'Circe', author: 'Madeline Miller' },
  {
    title: 'The Stranger',
    author: 'Albert Camus',
  },
  { title: 'The Book of Disquiet', author: 'Fernando Pessoa' },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
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
//string
const fullName = 'Devin Olesen';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
//object
const employee = { name: 'Devin', age: 22, position: 'Cook' };
const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
