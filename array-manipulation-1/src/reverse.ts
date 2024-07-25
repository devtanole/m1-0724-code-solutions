/* exported reverse */
function reverse(array: any[]): any {
  const revArr: unknown[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revArr.push(array[i]);
  }
  return revArr;
}
