/* exported oddOrEven */
function oddOrEven(numbers: number[]): any {
  const oddEvenArr: string[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddEvenArr.push('even');
    } else {
      oddEvenArr.push('odd');
    }
  }
  return oddEvenArr;
}
