function getRangeReport(start: number, end: number): any {
  const avg: number = (start + end) / 2;
  const rangeArr: number[] = [];
  for (let i = start; i <= end; i++) {
    rangeArr.push(i);
  }
  const evenArr: number[] = [];
  for (let i = 2; i <= end; i += 2) {
    evenArr.push(i);
  }
  const oddArr: number[] = [];
  for (let i = 1; i <= end; i += 2) {
    oddArr.push(i);
  }
  let total: number = 0;
  for (let i = 0; i < rangeArr.length; i++) {
    total += rangeArr[i];
  }
  return {
    average: avg,
    evens: evenArr,
    odds: oddArr,
    range: rangeArr,
    sum: total,
  };
}

console.log('getRange of 4 and 12:', getRangeReport(4, 12));
console.log('logging');
