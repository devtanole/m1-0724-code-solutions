'use strict';
/* exported compact */
function compact(array) {
  const compArr = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index]) {
      compArr.push(array[index]);
    }
  }
  return compArr;
}
