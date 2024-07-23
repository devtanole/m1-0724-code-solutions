'use strict';
/* exported countdown */
const countdown = (num) => {
  let arrayCount = [];
  for (let i = 0; i <= num; i++) {
    arrayCount.push(num - i);
  }
  return arrayCount;
};
