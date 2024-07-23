'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  let nameArr = [];
  for (let i = 0; i < students.length; i++) {
    nameArr.push(students[i].name);
  }
  return nameArr;
}
