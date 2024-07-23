/* exported getStudentNames */
function getStudentNames(students: any[]): any {
  const nameArr: string[] = [];
  for (let i = 0; i < students.length; i++) {
    nameArr.push(students[i].name);
  }
  return nameArr;
}
