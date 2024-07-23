/* exported filterOutNulls */
function filterOutNulls(values: any[]): any {
  const filArr: any[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filArr.push(values[i]);
    }
  }
  return filArr;
}
