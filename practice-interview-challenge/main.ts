interface RangeReport {
  average: number;
  evens: number[];
  odds: number[];
  total: number;
  range: number[];
}

function getRangeReport(start: number, end: number): RangeReport {
  const rangeArr: number[] = [];
  for (let i = start; i <= end; i++) {
    rangeArr.push(i);
  }
  const evenArr: number[] = rangeArr.filter((number) => number % 2 === 0);

  const oddArr: number[] = rangeArr.filter((number) => number % 2 !== 0);

  const total = rangeArr.reduce(function (x: number, y: number) {
    return x + y;
  }, 0);
  const avg: number = total / rangeArr.length;
  return {
    average: avg,
    evens: evenArr,
    odds: oddArr,
    range: rangeArr,
    total,
  };
}

console.log('getRange of 1 and 7:', getRangeReport(1, 7));
console.log('logging');
