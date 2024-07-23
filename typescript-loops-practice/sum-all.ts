/* exported sumAll */
function sumAll(numbers: number[]): any {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
