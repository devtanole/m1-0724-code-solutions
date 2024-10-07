'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
values.forEach((value) => {
  console.log(value);
});
values.forEach((item, index, arr) => {
  console.log('reverse:', arr[arr.length - 1 - index]);
});
