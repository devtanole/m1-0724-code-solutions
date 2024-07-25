'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  let kvpObj = {};
  let [key, value] = keyValuePair;
  kvpObj[key] = value;
  return kvpObj;
}
