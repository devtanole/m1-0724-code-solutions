/* exported getKeys */
function getKeys(object: object): any {
  const keyArr: any[] = [];
  for (const key in object) {
    keyArr.push(key);
  }
  return keyArr;
}
