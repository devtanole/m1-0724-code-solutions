/* exported compact */
function compact(array: any[]): any {
  const compArr: unknown[] = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index]) {
      compArr.push(array[index]);
    }
  }
  return compArr;
}
