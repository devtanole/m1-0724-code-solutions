'use strict';
console.log('hello, world');
// step 7
const $header = document.querySelector('h1');
console.log('query for $header:', $header);
console.dir($header);
//step 8
const $explanation = document.querySelector('#explanation');
console.log('query of $explanation:', $explanation);
console.dir($explanation);
//step 9
const $hint = document.querySelector('.hint');
console.log('query for hint:', $hint);
console.dir($hint);
//step 10
const $para = document.querySelectorAll('p');
console.log('query for para:', $para);
//step 11
const $exLinks = document.querySelectorAll('.example-link');
console.log('query for $exLinks:', $exLinks);
