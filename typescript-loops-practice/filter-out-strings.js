'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const filArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filArr.push(values[i]);
    }
  }
  return filArr;
}
