'use strict';
/* exported reverse */
function reverse(array) {
  const revArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revArr.push(array[i]);
  }
  return revArr;
}
