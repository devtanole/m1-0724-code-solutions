/* exported getIndexes */
function getIndexes(array: any[]): any {
  const indArr: any[] = [];
  for (let i = 0; i < array.length; i++) {
    indArr.push(i);
  }
  return indArr;
}
