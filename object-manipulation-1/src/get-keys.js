'use strict';
/* exported getKeys */
function getKeys(object) {
  let keyArr = [];
  for (const key in object) {
    keyArr.push(key);
  }
  return keyArr;
}
