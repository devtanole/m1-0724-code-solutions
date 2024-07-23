/* exported filterOutStrings */
function filterOutStrings(values: any[]): any {
  const filArr: any[] = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filArr.push(values[i]);
    }
  }
  return filArr;
}
