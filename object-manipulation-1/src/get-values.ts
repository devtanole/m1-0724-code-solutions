/* exported getValues */
function getValues(object: object): any {
  const valArr: any[] = [];
  for (const key in object) {
    valArr.push(object[key]);
  }
  return valArr;
}
