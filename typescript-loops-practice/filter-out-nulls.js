'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const filArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filArr.push(values[i]);
    }
  }
  return filArr;
}
