/* exported initial */
function initial(array: unknown[]): any {
  const initialArr: unknown[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    initialArr.push(array[i]);
  }
  return initialArr;
}
