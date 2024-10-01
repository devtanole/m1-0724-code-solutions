'use strict';
function getRangeReport(start, end) {
  const rangeArr = [];
  for (let i = start; i <= end; i++) {
    rangeArr.push(i);
  }
  const evenArr = rangeArr.filter((number) => number % 2 === 0);
  const oddArr = rangeArr.filter((number) => number % 2 !== 0);
  let total = rangeArr.reduce(function (x, y) {
    return x + y;
  }, 0);
  const avg = total / rangeArr.length;
  return {
    average: avg,
    evens: evenArr,
    odds: oddArr,
    range: rangeArr,
    total: total,
  };
}
console.log('getRange of 1 and 7:', getRangeReport(1, 7));
console.log('logging');
