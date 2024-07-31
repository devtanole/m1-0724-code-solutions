'use strict';
/* exported getValues */
function getValues(object) {
  let valArr = [];
  for (const key in object) {
    valArr.push(object[key]);
  }
  return valArr;
}
